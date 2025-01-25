import { Helmet } from 'react-helmet';

// Add this at the top of your App component
const SeoHead = () => (
    <Helmet>
      <title>School ERP Software India | Rajasthan - Pali, Jodhpur, Marwar School Management System</title>
      <meta name="description" content="India's leading school ERP software with special focus on Rajasthan schools in Pali, Jodhpur, Marwar region. All-in-one solution for attendance, fees, exams and student management across India." />
      <meta name="keywords" content="school erp software india, rajasthan school management system, pali education software, jodhpur student portal, marwar school erp, india education technology" />
      
      {/* Geo Targeting Meta */}
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Pali, Jodhpur, Marwar" />
      <meta name="geo.position" content="25.771355;73.323685" />
      <meta name="ICBM" content="25.771355, 73.323685" />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Edusystem",
          "description": "Pan-India School ERP Provider with Rajasthan Focus",
          "url": "https://edusystem.tech",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 25.771355,
              "longitude": 73.323685
            },
            "geoRadius": 200000,
            "description": "Serving all India with special focus on Rajasthan - Pali, Jodhpur, Jalore, Marwar, Sojat Road, Sirohi"
          },
          "areaServed": [
            {
              "@type": "State",
              "name": "Rajasthan",
              "containsPlace": [
                {"@type": "City", "name": "Pali"},
                {"@type": "City", "name": "Jodhpur"},
                {"@type": "City", "name": "Marwar"},
                {"@type": "City", "name": "Jalore"},
                {"@type": "City", "name": "Sirohi"}
              ]
            },
            {"@type": "Country", "name": "India"}
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Regional Support",
            "telephone": "+91-8058209225",
            "email": "rajasthan-support@edusystem.tech",
            "areaServed": ["IN-RJ"]
          }
        })}
      </script>
  
      {/* Local Business Listings */}
      <link rel="canonical" href="https://edusystem.tech/rajasthan-school-erp" />
      <meta property="business:contact_data:street_address" content="RJ Highway, Pali" />
      <meta property="business:contact_data:locality" content="Marwar" />
      <meta property="business:contact_data:region" content="RJ" />
      <meta property="business:contact_data:postal_code" content="306104" />
      <meta property="business:contact_data:country_name" content="India" />
    </Helmet>
  );
// In your App component return statement:
export default SeoHead;