"use client";

import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import Hero, { HomeType } from "@/components/Section/Hero";
import Project from "@/components/Section/Project";
import Contact from "@/components/Section/Contact";
import Skill from "@/components/Section/Skill";
import { useEffect, useRef, useState } from "react";
import jsonNavigationData from "@/data/navigation.json";

export interface SectionRefProps {
  heroRef: any;
  skillRef: any;
  projectRef: any;
  contactRef: any;
}

type DataType = {
  home: HomeType;
  skill: any;
  project: any;
  contact: any;
};

export default function Home() {
  const [currentHash, setCurrentHash] = useState("");
  const [sectionRef, setSectionRef] = useState<SectionRefProps>();
  const heroRef = useRef<any>(null);
  const skillRef = useRef<any>(null);
  const projectRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState(true);

  const fetchAll = async () => {
    const home = "*[_type == 'home'][0]";
    const skill =
      "*[_type == 'skill'][0]{title,textShadow,'design':design[]->{title,category,'image':image.asset->url},'code':code[]->{title,category,'image':image.asset->url}}";
    const project =
      "*[_type == 'project'][0]{title,textShadow,'project':project[]->{title,description,url,job,'thumbnail':thumbnail.asset->url,thumbnailHeight,'image':image.asset->url}}";
    const contact =
      "*[_type == 'contact'][0]{title,textShadow,description,'socialMedia':socialMedia[]->{title,url,'image':image.asset->url}}";

    const allQueries = `{ "home": ${home}, "skill": ${skill}, "project": ${project}, "contact": ${contact} }`;
    try {
      const res = await client.fetch(allQueries);
      setData(res);
    } catch (error) {
      console.error("Failed to fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!data) {
      fetchAll();
    }
  }, []);

  const navigation = jsonNavigationData.navigation;

  useEffect(() => {
    if (!loading) {
      setSectionRef({
        heroRef: heroRef,
        skillRef: skillRef,
        projectRef: projectRef,
        contactRef: contactRef,
      });
    }
  }, [loading]);

  return (
    <>
      <Header
        navigation={navigation}
        sectionRef={sectionRef}
        currentHash={currentHash}
      />
      <main className="flex min-h-screen flex-col items-center justify-between">
        {!loading && data ? (
          <>
            <div className="w-full overflow-hidden" ref={heroRef}>
              <Hero
                setCurrentHash={setCurrentHash}
                currentHash={currentHash}
                home={data.home}
              />
            </div>

            <div className="w-full overflow-hidden" ref={skillRef}>
              <Skill
                setCurrentHash={setCurrentHash}
                currentHash={currentHash}
                skill={data.skill}
              />
            </div>

            <div className="w-full overflow-hidden" ref={projectRef}>
              <Project
                setCurrentHash={setCurrentHash}
                currentHash={currentHash}
                project={data.project}
              />
            </div>

            <div className="w-full overflow-hidden" ref={contactRef}>
              <Contact
                setCurrentHash={setCurrentHash}
                currentHash={currentHash}
                contact={data.contact}
              />
            </div>
          </>
        ) : null}
      </main>
    </>
  );
}
