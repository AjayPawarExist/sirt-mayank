import Script from 'next/script'
import React from 'react'

export default function Schema() {
  return (
    <Script
        id="sirt-bhopal-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            "name": "Sagar Institute of Research & Technology (SIRT), Bhopal",
            "url": "https://www.sirtbhopal.ac.in/",
            "logo": "https://www.sirtbhopal.ac.in/assets/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Opposite Railway Station, NH-86",
              "addressLocality": "Bhopal",
              "addressRegion": "Madhya Pradesh",
              "postalCode": "462036",
              "addressCountry": "IN"
            },
            "description":
              "SIRT Bhopal is a NAAC A-grade, NBA-accredited private engineering college established in 2003. Admissions open for 2025–26 UG & PG programs via JEE Main, GATE, CMAT, MET, etc.",

            // Contact & Admissions
            "telephone": "+91-755-2752920",
            "email": "admissions@sirtbhopal.ac.in",
            "department": [
              { "@type": "CollegeOrUniversity", "name": "B.Tech in Computer Science & Engineering" },
              { "@type": "CollegeOrUniversity", "name": "M.Tech in Electrical Engineering" },
              { "@type": "CollegeOrUniversity", "name": "MBA" },
              { "@type": "CollegeOrUniversity", "name": "MCA" }
            ],
            "hasCourse": [
              {
                "@type": "Course",
                "name": "B.Tech Computer Science & Engineering",
                "provider": { "@type": "CollegeOrUniversity", "name": "SIRT Bhopal" }
              },
              {
                "@type": "Course",
                "name": "MBA",
                "provider": { "@type": "CollegeOrUniversity", "name": "SIRT Bhopal" }
              }
            ],
            "potentialAction": {
              "@type": "ApplyAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.sirtbhopal.ac.in/admissions/apply"
              },
              "name": "Apply for Admission 2025–26"
            },

            // Rankings
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.2",
              "bestRating": "5",
              "ratingCount": "350"
            },
            "ranking": [
              {
                "@type": "Rating",
                "ratingValue": "141",
                "ratingExplanation": "NIRF Engineering (Private) 2023",
                "ratingCount": "2410"
              },
              {
                "@type": "Rating",
                "ratingValue": "396",
                "ratingExplanation": "Collegedunia B.Tech ranking 2025",
                "ratingCount": "762"
              },
              {
                "@type": "Rating",
                "ratingValue": "79",
                "ratingExplanation": "Outlook B.Tech ranking 2024",
                "ratingCount": "160"
              }
            ]
          })
        }}
      />
  )
}
