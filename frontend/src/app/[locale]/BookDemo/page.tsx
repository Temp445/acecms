'use client'

import Header from "@/components/Navbar";
import { trackConversion } from "@/lib/google";
import React from "react";
import { InlineWidget } from "react-calendly";
import { useTranslations } from "next-intl";

const CalendlyEmbed = () => {
const url = "";

const t = useTranslations('Hero')

trackConversion({
      event: 'cms_bookdemo_view',
      form_id: 'n/a',
      form_name: 'CMS BookDemo Visit'
    });

  return (
 <div className="bg-gray-900 max-h-screen" >
  <div className="container mx-auto" >
    <Header/>
  </div>
  <h1 className="mt-10 text-xl md:text-2xl font-bold md:font-extrabold  text-center text-shadow-lg/20 text-white">{t('BookADemo')}</h1>
     <div className="pb-32">
      <InlineWidget url= {url}/>
    </div>
 </div>
  );
};

export default CalendlyEmbed;