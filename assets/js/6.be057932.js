(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{250:function(e,t,a){e.exports=a.p+"assets/img/mrathris.dcada7fe.png"},251:function(e,t,a){e.exports=a.p+"assets/img/mackenzie-8.076febc6.png"},252:function(e,t,a){e.exports=a.p+"assets/img/fgrow-report-committed.65b32666.png"},253:function(e,t,a){e.exports=a.p+"assets/img/fgrow-import-violations.3e3b4fd5.png"},254:function(e,t,a){e.exports=a.p+"assets/img/fgrow-staging-violations.74e14b9b.png"},255:function(e,t,a){e.exports=a.p+"assets/img/mackenzie-2.064ea569.png"},256:function(e,t,a){e.exports=a.p+"assets/img/mackenzie-6.be27035f.png"},257:function(e,t,a){e.exports=a.p+"assets/img/mackenzie-1.8bb982f4.png"},258:function(e,t,a){e.exports=a.p+"assets/img/mackenzie-10.6fde368d.png"},259:function(e,t,a){e.exports=a.p+"assets/img/mackenzie-3.a93a07b9.png"},260:function(e,t,a){e.exports=a.p+"assets/img/mackenzie-4.89b52caf.png"},385:function(e,t,a){"use strict";a.r(t);var r=a(1),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Tesera is an employee-owned company, founded in 1997.  Our focus is helping our clients create data-driven applications in the cloud.  We also maintain two core product lines in addition to our consulting practice.  "),r("a",{attrs:{href:"https://www.linkedin.com/showcase/municipal-risk-assessment-tool/about/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MRAT.ca"),r("OutboundLink")],1),e._v(" helps municipalities identify risk of basement flooding, while "),r("a",{attrs:{href:"https://cran.r-project.org/web/packages/forestinventory/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("forestinventory.ca"),r("OutboundLink")],1),e._v(" (High Resolution Inventory Services) enables forest and natural resource companies to access a new level of accuracy and precision in resource inventories and carbon measurement.")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://tesera.com/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a(250),alt:"MRAT + HRIS"}}),r("OutboundLink")],1),e._v(" "),r("br"),e._v(" "),r("em",[r("a",{attrs:{href:"https://www.linkedin.com/showcase/municipal-risk-assessment-tool/about/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MRAT.ca"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"http://forestinventory.ca",target:"_blank",rel:"noopener noreferrer"}},[e._v("forestinventory.ca"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("We deal with data from a variety of sources ranging from sample plots to in situ sensors. We grab samples and measurements to remotely sensed information from LiDAR, colour infrared and others.  Many proprietary specifications exist across those data sources, and to work around this, we’ve adopted CSV as our universal format.  We use Data Packages"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(", CSV files, and  Table Schema"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v(" to create database tables, validate data schemas and domains, import data from S3"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(" to PostgreSQL, DynamoDB"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),e._v(", and Elastic"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn5",id:"fnref5"}},[e._v("[5]")])]),e._v(".  In some cases we also use these Frictionless Data specs to move between application components, in particular where multiple technologies (Python, R, Javascript, and other) are utilized in a workflow.")]),e._v(" "),r("p",[e._v("We have adopted the Data Package standard as a simple, elegant way to describe and package our CSV data for interoperability between systems and components.  We use this in conjunction with the Table Schema which enables us to define rules and constraints"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn6",id:"fnref6"}},[e._v("[6]")])]),e._v(" for each field in the CSV file.  With this in mind we have set up our workflows to essentially connect S3 buckets with analytical processes. We have written some simple open-source AWS Lambda"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn7",id:"fnref7"}},[e._v("[7]")])]),e._v(" functions that let us easily invoke validation and sanitization at the end of each process on the backend.  We also expose this to the frontend of some of our applications so users can work through an import/contribution process where they are shown issues with their data that must be fixed before they can contribute.  "),r("strong",[e._v("This helps us ensure good interoperable data at a foundational level, thereby making it easier to use for analysis, visualization, or modeling without extensive ad-hoc quality control.")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(251),alt:'Example of validation error ("not a number") on import driven by Table Schema metadata'}}),e._v(" "),r("br"),e._v(" "),r("em",[e._v("Example of validation error (“not a number”) on import driven by Table Schema metadata")])]),e._v(" "),r("p",[e._v("We discovered Frictionless Data through GitHub by following Max Ogden and some of the interesting work he is doing with "),r("a",{attrs:{href:"http://datproject.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dat"),r("OutboundLink")],1),e._v(".  We were looking for simpler, more usable alternatives to the “standards” web-services craze of the 2000s.  We had implemented a large interoperability hub for observation data called the [Water and Environmental hub (WEHUB)]"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn8",id:"fnref8"}},[e._v("[8]")])]),e._v(" which supported various "),r("a",{attrs:{href:"http://www.opengeospatial.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OGC"),r("OutboundLink")],1),e._v(" standards ("),r("a",{attrs:{href:"http://www.opengeospatial.org/standards/waterml",target:"_blank",rel:"noopener noreferrer"}},[e._v("WaterML"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"http://www.opengeospatial.org/standards/sos",target:"_blank",rel:"noopener noreferrer"}},[e._v("SOS"),r("OutboundLink")],1),e._v(") which was supposed to make important information accessible to many stakeholders, but in reality, nobody was using it.  We were looking for a simpler way to enable data access and use for developers and downloaders alike.")]),e._v(" "),r("p",[e._v("We are especially keen on software that enables faster interoperability, especially within an AWS environment.  We envision a framework of loaders, validators, sanitizers, analyzers, and exporters, fundamentally based around Amazon S3, various databases, and Lambda or Elastic Container Service"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn9",id:"fnref9"}},[e._v("[9]")])]),e._v(" (for larger processes).  "),r("strong",[e._v("Having supported a lot of clients with a lot of projects, our goal has been to remove the common grunt work associated with data workflows to enable effort to be prioritized towards the use and application of the data.")])]),e._v(" "),r("p",[e._v("For instance, every data portal needs a way to import data into the system and likely a way to export data from the system.  Depending on the complexity of the application and the size of the imports and exports, various approaches were utilized which directly leveraged the database or relied on various libraries.  "),r("em",[e._v("The friction required to load and begin to make use of the data often consumed a large portion of project budgets.")]),e._v(" By moving towards common methods of import and export (as enabled by Data Package and Table Schema and deployed to Elastic Container Service and/or Lambda), we’ve been able to standardize that aspect of our data applications and not have to revisit it.")]),e._v(" "),r("p",[e._v("As the “Internet of Things” threatens to release yet another round of standards for essentially observation data, we hope to keep things simple and use what we have for these use cases as well.  Smaller imports and exports can readily be executed by Lambda; when they are more complex or resource-intensive, Lambda can trigger an ECS task to complete the work.")]),e._v(" "),r("p",[e._v("We developed some basic CSV to DynamoDB and ElasticSearch loaders in support of a Common Operating Picture toolset for the "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/2016_Fort_McMurray_wildfire",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fort McMurray Wildfires"),r("OutboundLink")],1),e._v(". In the coming days, we would like to clean those up, along with our existing RDS loaders and Lambda functions and start moving towards the framework described.  We are cleaning up and open sourcing a number of utilities to facilitate these workflows with the goal of being able to describe data types in CSV files, then automatically map them or input them into a model. There may be an opportunity to explicitly identify how spatial feature information is carried within a Data Package or Table Schema.")]),e._v(" "),r("p",[e._v("We are kind of excited about the method and framework itself to have almost "),r("a",{attrs:{href:"https://zapier.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zapier"),r("OutboundLink")],1),e._v("- or"),r("br"),e._v(" "),r("a",{attrs:{href:"https://ifttt.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("IFTTT"),r("OutboundLink")],1),e._v("-like capabilities for CSV data where we can rapidly accomplish many common use cases enabling resources to be prioritized to the business value.  On the application side, we have been getting pretty excited about ElasticSearch and Kibana"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn10",id:"fnref10"}},[e._v("[10]")])]),e._v(" and perhaps extending them to bring together more seamless exploration of large dynamic geospatial datasets, especially where the data is continuous/temporal in nature and existing GIS technology falls pretty flat.  This will be important as smart cities and “Internet of Things” use cases advance.")]),e._v(" "),r("h2",{attrs:{id:"projects"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#projects"}},[e._v("#")]),e._v(" Projects")]),e._v(" "),r("p",[r("em",[e._v("This next section will explore two Tesera-developed projects that employ the Frictionless Data specifications: the Provincial Growth and Yield Initiative Plot Sharing App (PGYI) and Mackenzie DataStream.")])]),e._v(" "),r("h3",{attrs:{id:"_1-provincial-growth-and-yield-initiative-plot-sharing-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-provincial-growth-and-yield-initiative-plot-sharing-app"}},[e._v("#")]),e._v(" 1. Provincial Growth and Yield Initiative Plot Sharing App")]),e._v(" "),r("p",[r("img",{attrs:{src:a(252),alt:"The Provincial Growth and Yield Initiative Plot Sharing App"}}),e._v(" "),r("br"),e._v(" "),r("em",[e._v("The Provincial Growth and Yield Initiative Plot Sharing App")])]),e._v(" "),r("p",[e._v("With this app, we are enabling the 16 government and industrial members of "),r("a",{attrs:{href:"https://fgrow.friresearch.ca/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forest Growth Organization of Western Canada (FGrOW)"),r("OutboundLink")],1),e._v(" to seamlessly share forest plot measurement data with each other and know that the data will be interoperable and meet their specifications.  Specifications were designed primarily with the data manager in mind and were formatted as a contribution guidelines document.  From this document, the "),r("a",{attrs:{href:"https://github.com/tesera/datatheme-afgo-pgyi",target:"_blank",rel:"noopener noreferrer"}},[e._v("afgo-pgyi"),r("OutboundLink")],1),e._v(" “Data Theme” was created which contains the Data Package details as well as the several Table Schemas required to assemble a dataset.  Having access to this large and interoperable dataset will enable their members to improve their growth and yield models and respond to bioclimatic changes as they occur.")]),e._v(" "),r("p",[e._v("We supported FGrOW in creating a set of data standards and then created the Table Schemas to enable a validation workflow.  The members upload a set of relational CSV files which are packaged up as Data Packages, uploaded to S3, and then validated by the Lambda Data Package Validator.  The results of this initial validation are returned to the user as errors (cannot proceed) or warnings (something is wrong but it can be accepted).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(253),alt:"PGYI import violations"}}),e._v(" "),r("br"),e._v(" "),r("em",[e._v("PGYI import violations")])]),e._v(" "),r("p",[e._v("At this stage the data is considered imported.  If there are no errors the user is able to stage their dataset which uses the Lambda RDS Loader to import the Data Package into an RDS PostGreSQL instance. This triggers a number of more sophisticated validation functions relating to tree growth rates, measurement impossibilities, and sanity checks at the database level.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(254),alt:"PGYI staging violations"}}),e._v(" "),r("br"),e._v(" "),r("em",[e._v("PGYI staging violations")])]),e._v(" "),r("p",[e._v("Having previously ensured the data meets the Table Schema and was loaded successfully, we have confidence in executing custom database functions without having to handle endless data anomalies and exceptions.  A simple example check to see if species changes between measurements can be illustrated below:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("CREATE OR REPLACE FUNCTION staging.get_upload_trees_species_violations(in_upload_id text)\nRETURNS SETOF staging.violation AS $$\n\nBEGIN\n   -- RULE 1: tree species should not change over time\n   RETURN QUERY\n\n       SELECT\n           '0'::text,\n           staged_tree.upload_id,\n\n           staged_tree.source_row_index,\n           'trees'::text,\n           array_to_string(ARRAY[staged_tree.company, staged_tree.company_plot_number, staged_tree.tree_number::text], '-'),\n\n           'trees.species.change'::text,\n           'warning'::text,\n           format('Tree species changed from %s to %s', committed_tree.species, staged_tree.species)\n\n       FROM staging.staged_trees staged_tree\n       INNER JOIN staging.committed_trees committed_tree\n       USING (company, company_plot_number, tree_number)\n\n       WHERE staged_tree.upload_id = in_upload_id\n           AND (staged_tree.species NOTNULL AND staged_tree.species <>'No')\n           AND staged_tree.species != committed_tree.species;\n\nEND;\n$$ LANGUAGE plpgsql;\n")])])]),r("p",[e._v("Again the user is presented with violations as errors or warnings and can they can choose to commit the plots without errors into the shared database.  Essentially this three step workflow from imported, to staged, to committed allows FGroW to ensure quality data that will be useful for their modeling and analysis purposes.")]),e._v(" "),r("p",[e._v("FGroW has built a database that currently has 2400 permanent sample plots each containing many trees and all together 10s of millions of measurements across a wide variety of strata including various natural regions and natural sub-regions.  This database provides the numeric power to produce and refine better growth models and enable companies to adopt their planning and management to real conditions.")]),e._v(" "),r("p",[e._v("There are many cases where industries might wish to bring together measurement data in a consistent way to maximize their productivity. "),r("strong",[e._v("One of the more obvious examples is in agriculture where precision information is increasingly collected at the local or individual farm level, but bringing this information together in aggregate would produce new and greater insight with regard to productivity, broad scale change, and perhaps adaption to climate change strategies.")])]),e._v(" "),r("h3",{attrs:{id:"_2-mackenzie-datastream"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-mackenzie-datastream"}},[e._v("#")]),e._v(" 2. Mackenzie DataStream")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.mackenziedatastream.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.mackenziedatastream.org/"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("img",{attrs:{src:a(255),alt:"Mackenzie DataStream App"}}),e._v(" "),r("br"),e._v(" "),r("em",[e._v("Mackenzie DataStream App")])]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.mackenziedatastream.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mackenzie DataStream"),r("OutboundLink")],1),e._v(" is an open access platform for exploring and sharing water data in the Mackenzie River Basin.  DataStream’s mission is to promote knowledge sharing and advance collaborative and evidence-based decision making throughout the Basin.  The Mackenzie River Basin is extremely large, measuring 1.8 million square kilometers and as such monitoring is a large challenge.  To overcome this challenge, water quality monitoring is carried out by a variety of partners which include communities and Aboriginal, territorial, and federal governments.  With multiple parties collecting and sharing information, Mackenzie DataStream had to overcome challenges of trust and interoperability.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(256),alt:"The Mackenzie River Basin"}}),e._v(" "),r("br"),e._v(" "),r("em",[e._v("The Mackenzie River Basin")])]),e._v(" "),r("p",[e._v("Tesera leveraged the Data Package standard as an easy way for Government and community partners alike to import data into the system.  We used Table Schema to define the structure and constraints of the Data Themes which we represented in a simple visible way.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(257),alt:"Table fields and validation rules derived from Table Schema"}}),e._v(" "),r("br"),e._v(" "),r("em",[e._v("Table fields and validation rules derived from Table Schema")])]),e._v(" "),r("p",[e._v("The backend on this system also relies on the Data Package Validator and the Relational Database Loader.  The observation data is then exposed to the client via a simple "),r("a",{attrs:{href:"http://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express.js"),r("OutboundLink")],1),e._v(" API as JSON.  The Frictionless Data specifications help us ensure clean consistent data and make visualization a breeze.  We push the data to "),r("a",{attrs:{href:"https://plot.ly/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plotly"),r("OutboundLink")],1),e._v(" to build the charts as it provides lots of options for scientific plotting, as well as a good api, at a minimal cost.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(258),alt:"Mackenzie DataStream visualization example"}}),e._v(" "),r("br"),e._v(" "),r("em",[e._v("Mackenzie DataStream visualization example")])]),e._v(" "),r("p",[e._v("The Mackenzie DataStream is gaining momentum and partners.  The "),r("a",{attrs:{href:"http://www.fortnelsonfirstnation.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fort Nelson First Nation"),r("OutboundLink")],1),e._v(" has joined on as a contributing partner and the "),r("a",{attrs:{href:"http://www.gov.nt.ca/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Government of Northwest Territories"),r("OutboundLink")],1),e._v(" is looking to apply DataStream to a few other datatypes and bringing on some addition partners in water permitting and cumulative effects monitoring.  We think of this as a simple and effective way to make environmental monitoring data more accessible.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(259),alt:"Mackenzie DataStream environmental observation data"}}),e._v(" "),r("br"),e._v(" "),r("em",[e._v("Mackenzie DataStream environmental observation data")])]),e._v(" "),r("p",[e._v("There are many ways to monitor the environment, but bringing the data together according to standards, ensuring that it is loaded correctly, and making it accessible via a simple API seems pretty universal.  We are working through a UX/UI overhaul and then hope to open source the entire DataStream application for other organizations that are collecting environmental observation data and looking to increase its utility to citizens, scientists, and consultants alike.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(260),alt:"Mackenzie DataStream summary statistics"}}),e._v(" "),r("br"),e._v(" "),r("em",[e._v("Mackenzie DataStream summary statistics")])]),e._v(" "),r("hr",{staticClass:"footnotes-sep"}),e._v(" "),r("section",{staticClass:"footnotes"},[r("ol",{staticClass:"footnotes-list"},[r("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[r("p",[e._v("Data Packages: "),r("a",{attrs:{href:"https://specs.frictionlessdata.io/data-package/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://specs.frictionlessdata.io/data-package/"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[r("p",[e._v("Table Schema: "),r("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://specs.frictionlessdata.io/table-schema/"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[r("p",[e._v("Amazon Simple Storage Service (Amazon S3): "),r("a",{attrs:{href:"https://aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/s3/"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[r("p",[e._v("Amazon DynamoDB: "),r("a",{attrs:{href:"https://aws.amazon.com/dynamodb/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/dynamodb/"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[r("p",[e._v("Elastic Search: "),r("a",{attrs:{href:"https://www.elastic.co/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.elastic.co/products/elasticsearch"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[r("p",[e._v("Table Schema Field Constraints: "),r("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/#constraints",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://specs.frictionlessdata.io/table-schema/#constraints"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn7"}},[r("p",[e._v("Amazon AWS Lambda: "),r("a",{attrs:{href:"https://aws.amazon.com/lambda/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/lambda/"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref7"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn8"}},[r("p",[e._v("Water and Environmental Hub: "),r("a",{attrs:{href:"http://watercanada.net/2013/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://watercanada.net/2013/"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref8"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn9"}},[r("p",[e._v("Amazon EC2: Virtual Server Hosting: "),r("a",{attrs:{href:"https://aws.amazon.com/ec2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/ec2/"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref9"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn10"}},[r("p",[e._v("Kibana: "),r("a",{attrs:{href:"https://www.elastic.co/products/kibana",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.elastic.co/products/kibana"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref10"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);