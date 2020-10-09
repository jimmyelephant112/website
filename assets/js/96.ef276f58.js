(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{459:function(e,t,a){"use strict";a.r(t);var r=a(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"frictionless-framework"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frictionless-framework"}},[e._v("#")]),e._v(" Frictionless Framework")]),e._v(" "),a("p",[e._v("We are excited to announce our new high-level Python framework, frictionless-py: "),a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/frictionless-py"),a("OutboundLink")],1),e._v(". Frictionless-py was created to simplify overall user-experience for working with Frictionless Data in Python. It provides several high-level improvements in addition to many low-level fixes. Read more details below, or watch this intro video by Frictionless developer Evgeny: "),a("a",{attrs:{href:"https://youtu.be/VPnC8cc6ly0",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://youtu.be/VPnC8cc6ly0"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"why-did-we-write-new-python-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-did-we-write-new-python-code"}},[e._v("#")]),e._v(" Why did we write new Python code?")]),e._v(" "),a("p",[e._v("Frictionless Data has been in development for almost a decade, with global users and projects spanning domains from science to government to finance. However, our main Python libraries ("),a("code",[e._v("datapackage")]),e._v(","),a("code",[e._v("goodtables")]),e._v(", "),a("code",[e._v("tableschema")]),e._v(","),a("code",[e._v("tabulator")]),e._v(") were originally built with some inconsistencies that have confused users over the years. We had started redoing our documentation for our existing code, and realized we had a larger issue on our hands - mainly that the disparate Python libraries had overlapping functionalities and we were not able to clearly articulate how they all fit together to form a bigger picture. We realized that overall, the existing user experience was not where we wanted it to be. Evgeny, the Frictionless Data technical lead developer, had been thinking about ways to improve the Python code for a while, and the outcome of that work is "),a("code",[e._v("frictionless-py")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"what-happens-to-the-old-python-code-datapackage-py-goodtables-py-tableschema-py-tabulator-py-how-does-this-affect-current-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-happens-to-the-old-python-code-datapackage-py-goodtables-py-tableschema-py-tabulator-py-how-does-this-affect-current-users"}},[e._v("#")]),e._v(" What happens to the old Python code ("),a("code",[e._v("datapackage-py")]),e._v(", "),a("code",[e._v("goodtables-py")]),e._v(", "),a("code",[e._v("tableschema-py")]),e._v(", "),a("code",[e._v("tabulator-py")]),e._v(")? How does this affect current users?")]),e._v(" "),a("p",[a("code",[e._v("Datapackage-py")]),e._v(" (see "),a("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-py#datapackage-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("details"),a("OutboundLink")],1),e._v("), "),a("code",[e._v("tableschema-py")]),e._v(" (see "),a("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-py#tableschema-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("details"),a("OutboundLink")],1),e._v("), "),a("code",[e._v("tabulator-py")]),e._v(" (see "),a("a",{attrs:{href:"https://github.com/frictionlessdata/tabulator-py#tabulator-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("details"),a("OutboundLink")],1),e._v(") still exist, will not be altered, and will be maintained. If your project is using this code, these changes are not breaking and there is no action you need to take at this point. However, we will be focusing new development on "),a("code",[e._v("frictionless-py")]),e._v(", and encourage you to consider starting to experiment with or work with "),a("code",[e._v("frictionless-py")]),e._v(" during the last months of 2020 and migrate to it starting from 2021 "),a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py/blob/master/docs/target/migration-guide/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("(here is our migration guide)"),a("OutboundLink")],1),e._v(". The one important thing to note is that "),a("code",[e._v("goodtables-py")]),e._v(" has been subsumed by "),a("code",[e._v("frictionless-py")]),e._v(" (since version 3 of Goodtables). We will continue to bug-fix "),a("code",[e._v("goodtables@2.x")]),e._v(" in "),a("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py/tree/goodtables",target:"_blank",rel:"noopener noreferrer"}},[e._v("this branch"),a("OutboundLink")],1),e._v(" and it is also still available on "),a("a",{attrs:{href:"https://pypi.org/project/goodtables/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PyPi"),a("OutboundLink")],1),e._v(" as it was before. Please note that "),a("code",[e._v("frictionless@3.x")]),e._v(" version’s API is not stable as we are continuing to work on it at the moment. We will release "),a("code",[e._v("frictionless@4.x")]),e._v(" by the end of 2020 to be the first SemVer/stable version.")]),e._v(" "),a("h2",{attrs:{id:"what-does-frictionless-py-do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-does-frictionless-py-do"}},[e._v("#")]),e._v(" What does "),a("code",[e._v("frictionless-py")]),e._v(" do?")]),e._v(" "),a("p",[a("code",[e._v("Frictionless-py")]),e._v(" has four main functions for working with data: describe, extract, validate, and transform. These are inspired by typical data analysis and data management methods.")]),e._v(" "),a("p",[a("em",[e._v("Describe your data")]),e._v(": You can infer, edit and save metadata of your data tables. This is a first step for ensuring data quality and usability. Frictionless metadata includes general information about your data like textual description, as well as field types and other tabular data details.")]),e._v(" "),a("p",[a("em",[e._v("Extract your data")]),e._v(": You can read your data using a unified tabular interface. Data quality and consistency are guaranteed by a schema. Frictionless supports various file protocols like HTTP, FTP, and S3 and data formats like CSV, XLS, JSON, SQL, and others.")]),e._v(" "),a("p",[a("em",[e._v("Validate your data")]),e._v(": You can validate data tables, resources, and datasets. Frictionless generates a unified validation report, as well as supports a lot of options to customize the validation process.")]),e._v(" "),a("p",[a("em",[e._v("Transform your data")]),e._v(": You can clean, reshape, and transfer your data tables and datasets. Frictionless provides a pipeline capability and a lower-level interface to work with the data.")]),e._v(" "),a("p",[e._v("Additional features:")]),e._v(" "),a("ul",[a("li",[e._v("Powerful Python framework")]),e._v(" "),a("li",[e._v("Convenient command-line interface")]),e._v(" "),a("li",[e._v("Low memory consumption for data of any size")]),e._v(" "),a("li",[e._v("Reasonable performance on big data")]),e._v(" "),a("li",[e._v("Support for compressed files")]),e._v(" "),a("li",[e._v("Custom checks and formats")]),e._v(" "),a("li",[e._v("Fully pluggable architecture")]),e._v(" "),a("li",[e._v("The included API server")]),e._v(" "),a("li",[e._v("More than 1000+ tests")])]),e._v(" "),a("h2",{attrs:{id:"how-can-users-get-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-users-get-started"}},[e._v("#")]),e._v(" How can users get started?")]),e._v(" "),a("p",[e._v("We recommend that you begin by reading the "),a("a",{attrs:{href:"https://colab.research.google.com/drive/1VyDx6C3pxF3Vab8MxH_sI86OTSNmYuDJ",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting Started Guide"),a("OutboundLink")],1),e._v(" and the "),a("a",{attrs:{href:"https://colab.research.google.com/drive/1HGXJa7BWyEgoGZLkC6tKt2DMqgeHibEY",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction Guide"),a("OutboundLink")],1),e._v(". We also have in depth documentation for "),a("a",{attrs:{href:"https://colab.research.google.com/drive/1eIq1ZTUntJplRxkGHxmqlxZ0zyXCm0wU",target:"_blank",rel:"noopener noreferrer"}},[e._v("Describing Data"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://colab.research.google.com/drive/1is_PcpzFl42aWI2B2tHaBGj3jxsKZ_eZ",target:"_blank",rel:"noopener noreferrer"}},[e._v("Extracting Data"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://colab.research.google.com/drive/1cJSZlG_v6OI3I2FtnXdKOSPjhwZNjMK1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Validating Data"),a("OutboundLink")],1),e._v(", and "),a("a",{attrs:{href:"https://colab.research.google.com/drive/1C4dFWDExyxzGIwLUovrDQZghZK4JK2PD",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transforming Data"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"how-can-you-give-us-feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-you-give-us-feedback"}},[e._v("#")]),e._v(" How can you give us feedback?")]),e._v(" "),a("p",[e._v("What do you think? Let us know your thoughts, suggestions, or issues by joining us in our community chat on "),a("a",{attrs:{href:"https://discord.com/invite/j9DNFNw",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),a("OutboundLink")],1),e._v(" or by opening an issue in the "),a("code",[e._v("frictionless-py")]),e._v(" repo: "),a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/frictionless-py/issues"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"faq’s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq’s"}},[e._v("#")]),e._v(" FAQ’s")]),e._v(" "),a("h3",{attrs:{id:"where’s-the-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where’s-the-documentation"}},[e._v("#")]),e._v(" Where’s the documentation?")]),e._v(" "),a("p",[e._v("Are you a new user? Start here: "),a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py/blob/master/docs/target/getting-started/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting Started"),a("OutboundLink")],1),e._v(" & "),a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py/blob/master/docs/target/introduction-guide/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction Guide"),a("OutboundLink")],1),a("br"),e._v("\nAre you an existing user? Start here: "),a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py/blob/master/docs/target/migration-guide/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Migration Guide"),a("OutboundLink")],1),a("br"),e._v("\nThe full list of documentation can be found here: "),a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py#documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/frictionless-py#documentation"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"what’s-the-difference-between-datapackage-and-frictionless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what’s-the-difference-between-datapackage-and-frictionless"}},[e._v("#")]),e._v(" What’s the difference between "),a("code",[e._v("datapackage")]),e._v(" and "),a("code",[e._v("frictionless")]),e._v("?")]),e._v(" "),a("p",[e._v("In general, "),a("code",[e._v("frictionless")]),e._v(" is our new generation software while "),a("code",[e._v("tabulator")]),e._v("/"),a("code",[e._v("tableschema")]),e._v("/"),a("code",[e._v("datapackage")]),e._v("/"),a("code",[e._v("goodtables")]),e._v(" are our previous generation software. "),a("code",[e._v("Frictionless")]),e._v(" has a lot of improvements over them. Please see this issue for the full answer and a code example: "),a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py/issues/428",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/frictionless-py/issues/428"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"i’ve-spotted-a-bug-where-do-i-report-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i’ve-spotted-a-bug-where-do-i-report-it"}},[e._v("#")]),e._v(" I’ve spotted a bug - where do I report it?")]),e._v(" "),a("p",[e._v("Let us know by opening an issue in the "),a("code",[e._v("frictionless-py")]),e._v(" repo: "),a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/frictionless-py/issues"),a("OutboundLink")],1),e._v(". For "),a("code",[e._v("tabulator")]),e._v("/"),a("code",[e._v("tableschema")]),e._v("/"),a("code",[e._v("datapackage")]),e._v(" issues, please use the corresponding issue tracker and we will triage it for you. Thanks!")]),e._v(" "),a("h3",{attrs:{id:"i-have-a-question-where-do-i-get-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-have-a-question-where-do-i-get-help"}},[e._v("#")]),e._v(" I have a question - where do I get help?")]),e._v(" "),a("p",[e._v("You can ask us questions in our Discord chat and someone from the main developer team or from the community will help you. Here is an invitation link: "),a("a",{attrs:{href:"https://discord.com/invite/j9DNFNw",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://discord.com/invite/j9DNFNw"),a("OutboundLink")],1),e._v(". We also have a Twitter account "),a("a",{attrs:{href:"https://twitter.com/frictionlessd8a",target:"_blank",rel:"noopener noreferrer"}},[e._v("(@frictionlessd8a)"),a("OutboundLink")],1),e._v(" and community calls where you can come meet the team and ask questions: "),a("a",{attrs:{href:"http://frictionlessdata.io/events/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://frictionlessdata.io/events/"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"i-want-to-help-how-do-i-contribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-want-to-help-how-do-i-contribute"}},[e._v("#")]),e._v(" I want to help - how do I contribute?")]),e._v(" "),a("p",[e._v("Amazing, thank you! We always welcome community contributions. Start here ("),a("a",{attrs:{href:"https://frictionlessdata.io/contribute/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://frictionlessdata.io/contribute/"),a("OutboundLink")],1),e._v(") and here ("),a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/frictionless-py/blob/master/CONTRIBUTING.md"),a("OutboundLink")],1),e._v(") and you can also reach out to Evgeny (@roll) or Lilly (@lwinfree) on GitHub if you need help.")]),e._v(" "),a("h3",{attrs:{id:"additional-links-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-links-resources"}},[e._v("#")]),e._v(" Additional Links/Resources")]),e._v(" "),a("ul",[a("li",[e._v("Intro to "),a("code",[e._v("frictionless-py")]),e._v(" video: "),a("a",{attrs:{href:"https://youtu.be/VPnC8cc6ly0",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://youtu.be/VPnC8cc6ly0"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("frictionless-py")]),e._v(" repository: "),a("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/frictionless-py"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Frictionless Data website: "),a("a",{attrs:{href:"https://frictionlessdata.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://frictionlessdata.io/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);