'use client'

import Header from "@/components/Navbar";
import Header1 from "@/components/Navbar1";
import { trackConversion } from "@/lib/google";
import React from "react";
import { InlineWidget } from "react-calendly";
import { useTranslations } from "next-intl";

const CalendlyEmbed = () => {
const url = process.env.NEXT_PUBLIC_CALENDLY_URL;

const t = useTranslations('Hero')

trackConversion({
      event: 'cms_bookdemo_view',
      form_id: 'n/a',
      form_name: 'CMS BookDemo Visit'
    });

  return (
<div>
  <Header1/>
   <div className="bg-gray-900 " >
  <div className="container mx-auto" >
    <Header/>
  </div>
  <h1 className="mt-10 text-xl md:text-2xl font-bold md:font-extrabold  text-center text-shadow-lg/20 text-white">{t('BookADemo')}</h1>
     <div className="pb-32">
      <InlineWidget url= {url as string }
      styles={{ height: '700px' }}
      />
    </div>
 </div>
</div>
  );
};

export default CalendlyEmbed;