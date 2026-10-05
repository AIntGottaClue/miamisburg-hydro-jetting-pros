export type Area = { slug: string; name: string; county: string; place: string; intro: string; paragraphs: string[]; calls: string[]; nearby: string[]; title: string; faqs: {question: string; answer: string}[]; sources: {label: string; url: string}[]; };
export const areas: Area[] = [
  {
    "intro": "Hydro jetting in Historic Downtown Miamisburg starts with the age of the buildings. The district is made up of late nineteenth and early twentieth century commercial buildings, so a drain line can serve a very old structure.",
    "paragraphs": [
      "The Miamisburg Historical Society says the entire downtown district is a series of late 19th and early 20th century commercial buildings listed on the National Register of Historic Places. Building age does not tell you what pipe is under the floor. Ask about past renovations, additions and replaced sections rather than assuming a material.",
      "The city describes downtown as a community asset and says it has supported revitalization and historic preservation since the early 1990s. A business in a historic building may have shared walls, basements and floor drains that run through older sections. Tell us which fixtures or floor drains are affected and whether neighboring units share the line.",
      "For restaurants and other food businesses, a slow kitchen line and a grease problem are common questions. Describe whether the backup follows busy service hours, and whether one fixture or several are slow. Cleaning removes buildup from a suitable pipe; it does not repair a cracked or collapsed section."
    ],
    "faqs": [
      {
        "question": "Do old downtown buildings have original drain pipe?",
        "answer": "Not necessarily. Building age does not show what is installed today. A camera look and past repair records say more than the date of the building."
      },
      {
        "question": "Can hydro jetting be used in a historic building?",
        "answer": "It depends on the pipe condition and access. The line should be assessed first, and a fragile or damaged section may need a different approach."
      },
      {
        "question": "Who do I call for a public sewer problem downtown?",
        "answer": "The city water and sewer page lists contacts, including an after-hours water and sewer emergency number. Confirm whether the issue sits in the building or at the public connection."
      },
      {
        "question": "What should I send with a request?",
        "answer": "The address, which drains are affected, how often it happens, and whether other units share the line."
      }
    ],
    "sources": [
      {
        "label": "the city's Historic Downtown page",
        "url": "https://cityofmiamisburg.com/historic-downtown/"
      },
      {
        "label": "the Miamisburg Historical Society's Historic Main Street page",
        "url": "https://www.historicalmiamisburg.org/historic-main-street"
      },
      {
        "label": "the city water and sewer page",
        "url": "https://cityofmiamisburg.com/water-sewer/"
      }
    ],
    "slug": "historic-downtown",
    "name": "Historic Downtown",
    "county": "Montgomery",
    "place": "neighborhood",
    "nearby": [
      "riverfront-corridor",
      "sycamore-trails-area",
      "sycamore-walk"
    ],
    "calls": [
      "Does building age tell me the pipe material?",
      "Do floor drains share a line with neighbors?",
      "Is a grease line the same as a kitchen drain?"
    ],
    "title": "Older commercial buildings and shared lines"
  },
  {
    "intro": "Hydro jetting near the Great Miami River in Miamisburg should include a question about rain and high water. The river and its creeks shaped the town, and low-lying properties near it have a flood history.",
    "paragraphs": [
      "A historical marker for the Great Flood of 1913 says the Great Miami River overflowed its banks at Miamisburg on March 25, fed by runoff from Bear and Sycamore creeks, and that floodwaters swept away or wrecked homes, businesses and bridges. That is history, not a statement about any current address. It is a reason to ask whether a backup follows heavy rain.",
      "Riverfront Park covers about seven acres along the river a short walk from downtown shops and restaurants, according to the Great Miami Riverway. Properties near the park and the river trail range from businesses to homes. Tell us whether your problem appears in a basement, a floor drain or an upstairs fixture.",
      "A backup that shows up only during heavy rain is a different question from a slow kitchen sink. Cleaning a private line can help when buildup is the cause. It cannot change how the public system handles stormwater, so report the timing of rain-linked backups to the city as well."
    ],
    "faqs": [
      {
        "question": "Does living near the river mean my line needs jetting?",
        "answer": "No. Location alone does not show a blockage. Describe the symptoms and when they happen."
      },
      {
        "question": "Why does the rain timing matter?",
        "answer": "A problem that appears only in heavy rain can point to the public system or to groundwater, not to buildup in a private line."
      },
      {
        "question": "Can jetting fix a basement backup during a storm?",
        "answer": "Not by itself. Cleaning removes buildup from a suitable line; it does not change how stormwater reaches the system."
      },
      {
        "question": "Who do I call about a public sewer emergency?",
        "answer": "The city water and sewer page lists an after-hours water and sewer emergency line. Use it for public-system concerns."
      }
    ],
    "sources": [
      {
        "label": "the Great Miami Riverway's Riverfront Park page",
        "url": "https://greatmiamiriverway.com/maps/miamisburg-riverfront-park"
      },
      {
        "label": "a historical marker for the Great Flood of 1913",
        "url": "https://www.hmdb.org/m.asp?m=127231"
      },
      {
        "label": "the city water and sewer page",
        "url": "https://cityofmiamisburg.com/water-sewer/"
      }
    ],
    "slug": "riverfront-corridor",
    "name": "Great Miami River Corridor",
    "county": "Montgomery",
    "place": "neighborhood",
    "nearby": [
      "historic-downtown",
      "sycamore-trails-area",
      "sycamore-walk"
    ],
    "calls": [
      "Does rain timing matter for a backup?",
      "Can jetting fix a stormwater issue?",
      "Who handles public sewer emergencies?"
    ],
    "title": "River-corridor properties and rain-linked backups"
  },
  {
    "intro": "Hydro jetting near Sycamore Trails Park in Miamisburg covers homes around the city's largest park. The park was dedicated to the city in 1971, so the surrounding development spans several decades.",
    "paragraphs": [
      "The city's parks department calls Sycamore Trails Park the city's largest park, with nearly 75 acres of trails and forest, and says it was dedicated to the city in 1971. Homes around a park of that age can include a mix of building years. A house from one decade may have additions or repairs from another.",
      "Mature trees are common near parks and wooded areas. Tree roots can enter a sewer line, but a nearby tree does not prove a root blockage. Describe whether the slow drain is recent or has come back after being cleared before, and whether it affects one fixture or the whole house.",
      "A camera inspection can show whether roots, grease or a damaged pipe is behind the problem. Cleaning is for removable buildup in a pipe that can take it."
    ],
    "faqs": [
      {
        "question": "Do trees near the park cause drain problems?",
        "answer": "They can, but a tree alone is not proof. A camera inspection shows whether roots are in the line."
      },
      {
        "question": "Is every home around the park the same age?",
        "answer": "No. Development near the park spans decades, so ask about the age of the plumbing at your address."
      },
      {
        "question": "How do I know if jetting is right for a recurring clog?",
        "answer": "The line has to be assessed first. A repeat clog can mean buildup, roots or a damaged section."
      },
      {
        "question": "What should I tell you about the drain?",
        "answer": "Which fixtures are slow, how long it has been going on, and whether it came back after earlier cleaning."
      }
    ],
    "sources": [
      {
        "label": "the city parks page for Sycamore Trails Park",
        "url": "https://www.playmiamisburg.com/sycamore-trails-park/"
      },
      {
        "label": "the city water and sewer page",
        "url": "https://cityofmiamisburg.com/water-sewer/"
      }
    ],
    "slug": "sycamore-trails-area",
    "name": "Sycamore Trails Park Area",
    "county": "Montgomery",
    "place": "neighborhood",
    "nearby": [
      "sycamore-walk",
      "historic-downtown",
      "riverfront-corridor"
    ],
    "calls": [
      "Can tree roots enter a sewer line?",
      "Does a camera inspection help?",
      "Is a repeat clog always roots?"
    ],
    "title": "Homes near a long-established park"
  },
  {
    "intro": "Hydro jetting in the Sycamore Walk subdivision in Miamisburg starts with the home type. The community is described as a mix of single-level condominiums and other home styles.",
    "paragraphs": [
      "A local real-estate listing page describes Sycamore Walk as a subdivision in Miamisburg, Montgomery County, with tree-lined streets and a variety of home styles. That is a marketing description, not an official record, and it does not show how any home is plumbed. Treat it as general context.",
      "In condominium and attached homes, a single line can serve more than one unit, and responsibility for the line may sit with an association. Check your association documents before assuming who is responsible for a section of drain.",
      "Tell us which fixtures are affected, whether neighbors have the same problem, and whether the problem began after a storm or came back after earlier cleaning. That helps tell a private fixture problem from a shared or public one."
    ],
    "faqs": [
      {
        "question": "Who is responsible for a shared drain line?",
        "answer": "That depends on your association documents and where the line sits. Check them before arranging work."
      },
      {
        "question": "Do my neighbors' drains matter?",
        "answer": "Yes. If several homes have the same problem, the cause may be in a shared or public section."
      },
      {
        "question": "Is this page an official description of the neighborhood?",
        "answer": "No. It draws on a real-estate listing page, which is general marketing context."
      },
      {
        "question": "Who do I call about a public sewer emergency?",
        "answer": "The city water and sewer page lists an after-hours water and sewer emergency line."
      }
    ],
    "sources": [
      {
        "label": "a real-estate listing page for Sycamore Walk",
        "url": "https://www.miamivalleydreamhomes.com/listings/subdivision/Sycamore-Walk/"
      },
      {
        "label": "the city water and sewer page",
        "url": "https://cityofmiamisburg.com/water-sewer/"
      }
    ],
    "slug": "sycamore-walk",
    "name": "Sycamore Walk",
    "county": "Montgomery",
    "place": "neighborhood",
    "nearby": [
      "sycamore-trails-area",
      "historic-downtown",
      "riverfront-corridor"
    ],
    "calls": [
      "Who is responsible for a shared line?",
      "Do neighbors have the same problem?",
      "Is the line private or public?"
    ],
    "title": "Attached homes and shared lines"
  }
];

export const areaBySlug: Record<string, Area> = Object.fromEntries(areas.map(a => [a.slug, a]));
