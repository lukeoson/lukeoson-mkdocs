---
date: 2023-11-01
authors: 
  - lukeoson
post_excerpt: A trip to Denver for the inaugural Network Automation Forum (NAF) AutoCon0 Conference.
description: >
  A review of "Behave: The Biology of Humans at Our Best and Worst" by Robert Sapolsky. The book takes a multidisciplinary approach to human behavior, combining neuroscience, psychology, and evolutionary biology to explore why humans behave the way they do.
title: AutoCon0 Conference
categories:
  - Event-Review
tags: 
  - Network-Automation
  - Network-Community
  - Conference

readtime: 5
---

# Network Automation Forum (NAF) AutoCon0


AutoCon Reflections: The Evolution of Network Automation 

￼

## AutoCon Reflections: The Evolution of Network Automation

AutoCon conferences are remarkable gatherings of our network automation tribe. The Network Automation Forum (NAF) has fostered an engaged, curious community that's pushing toward what's possible in automated network infrastructure. I’m sure we’re all thankful for Chris & Scotts’s passionate efforts bringing ‘our people’ together… and we hope they get very rich along the way! They deserve all the accolades and more besides. Take a Bow.  

They say you should follow the money and I’m keen to better grasp the macro economics of our sector in transition. A theme I’ll be exploring in more depth later. But my initial presumption is we are seeing a slow burn realignment of allocated capital that will be of great benefit to the thought leaders in this space. If anyone can help me understand this better… please reach out. I’m patient - but I too would like to be rich before I die. Being dirt poor ✅, Being able to feed myself ✅, Being able for afford a Vision Pro & Cisco U subscription… working on it.   

Let’s begin with the NAFs negatively framed tagline and central question—*"Why hasn't network automation seen full adoption yet?”*… which is an appropriately provocative query but strikes me as somewhat out of whack. Mostly because I believe we are in the **new golden era of networking**, filled with the most exciting tools, systems, and platforms, and an unprecedented tolerance for experimentation and failure. It’s ironic that many of the vendors we moan about as automation obstacles have, in their oligopolistic malaise,  opened the market for the very companies sponsoring these conferences, allowing them to thrive in spaces previously under the iron fist by the big players. 

These conferences are for engineers rather than companies so its appropriate to interrogate that question with more regard to our professional fulfillment and joy as network tinkerers, as opposed to accrued business value as corporate stooges - ultimately crucial though that is! And from that perspective, as far as I can tell, everything is going great! But I’m a moron so don’t listen to me. 

Let's get into what I’ve gathered from these conferences, focusing on my favorite presentations from the most recent AutoCon1 in Amsterdam (because the content was much better than AutoCon0 in Denver), before placing all this in the context of where I see network automation heading and drawing a quasi analogy to the intellectual zeitgeist of the cycles of societal systems and **The Four Turnings**. It’s a stretch.. but it kinda fits. 

!!! Note “The cycle of Life (and Networks).” 
All thats’ old is new again. Plan, Build, Operate,  we all have one of those circular diagrams. We seen every iteration of them. We use them because they are true in some conceptual or actual sense. They are a compelling frame of reference for understanding what the hell is going on.  Anyone noticed the migration back to CLI  implementations abstracting new fangled automation tools of late.  All thats’ old is new again. Full circle. How Meta is that. 

---

### **Dinesh's Contrarian Keynote: History Doesn’t Repeat, but It Rhymes**

At AutoCon1, **Dinesh** delivered a compelling keynote, titled **"A Contrarian Perspective"**. His use of the phrase, **“History doesn’t repeat, but it certainly rhymes,”** set the tone for a talk that challenged much of the conventional wisdom in network automation. And will assist me in folding in the Four Turnings analogy later in this post. 

My real time notes included:

- **Primordial Soup**: He likened the rise of **network engineers and developers** to evolving from the same "primordial soup," yet diverging into different technical lineages. Different species can’t reproduce!
  
- **Configuration Management ≠ Automation**: Dinesh emphasised that **configuration management** isn’t real automation. Today, it’s more about **validation**—automating the processes that ensure configurations are correct and in line with policy.

- **Python is the New OpenFlow**: One provocative statements was, **“Python is the new OpenFlow.”** While **Python** has become a de facto tool for many, Dinesh warned that this won’t be the endgame. He compared Python to OpenFlow’s failure due to its **low-level abstraction**, implying that simply knowing Python isn’t sufficient.

- **The Myth of a Uniform Data Model**: He argued that the industry’s dream of a **uniform data model** across vendors is a myth. Vendors will always **“vendor,”** meaning they’ll continue to prioritize their own ecosystems over true interoperability. Broken hearts all round. More on this later. 

- **Avoid the Go-Lang Bandwagon**: Dinesh advised against pushing specific languages like **Go-Lang** without considering the bigger picture—where the industry came from versus where it’s headed. He drew an empathetic cord that spoke to people like me that love our field of play but are not genetically built for it. We need tools that democratise the playing field and are accessible to amateurs as well as autoGods - praise be upon him.   

This led to a deeper reflection on what the next generation of tools will be, coining the term **Tools 2.0**—a theme that continued in discussions throughout the conference. I presume his unsaid rift here is “Oh, Susie Q, baby, (we should) love you”. And we really do, so Thank You!

---

### **Claudia's Space Flight Analogy: Automating to the Moon**

Among all the speakers, **Claudia De Luna** of Gratuitous Arp, delivered what I believe was the best talk of the AutoCons to date. She drew a powerful analogy between the **stages of network automation maturity** and the **space flight missions** that led to the **Apollo moon landing**.

My real time notes included:

1. **Mercury**: The early days of automation—akin to manually copying and pasting configurations. We were simply orbiting the earth, building basic scripts, and laying groundwork.
   
2. **Gemini**: This phase was about endurance—engineers started creating automation scripts that could be triggered manually but in a **reliable** way, much like the longer-duration **Gemini missions** that bridged the path to Apollo.
   
3. **Apollo**: Full automation, akin to landing on the moon. **Fully automated workflows** are triggered with minimal human intervention, solving complex problems autonomously.

> **“Who really needs Apollo-level automation?”** Claudia challenged us, pointing out that some businesses are aiming for complete automation when, in reality, a more practical level of automation may be sufficient right now while we figure things out as a community and corporate ecosystems. 

It’s a question worth pondering: **How far do we actually need to go?** And more importantly, **what’s the cost of pushing automation too far too soon in our current nascent state?**

I was fortunate to have the opportunity to interact with Claudia a bit during the Workshops in the days prior to the main conference. She was a stand out wonderful person I admired very much. She will be an essential resource and important player as we quest towards Mars. May the force be with her.   

---

### **Kubenet: Network Automation with Kubernetes**

Thank You Nokia! By far the best of the Workshops was Nokia’s Container Lab session delivered by our communities shining light, Roman. What an incredibly impressive person he is. Respect. We have much to thank Nokia and its exceptional people for. Their approach to open sourcing community tools that deliver outstanding value and assist in building the automation ecosystem is a credit to clever capitalism done right. Container Lab is very well covered in a million community posts so I won’t spend any time on it here - other than to bridge this post toward Wim and Kubenet by linking to the latest iteration… Clabernetes. Check it out. 

One of the most impressive takeaways from AutoCon1 was **Wim**'s introduction of **Kubenet**, a new tool from **Nokia**. Wim, the head of technology and architecture IP at Nokia, has been a shining light and thought leader within the NAF AutoCon community, much respected as an authority in the field. 

Wim opened his session by noting how **Nokia's approach** to making tools like **Container Lab** and **SR Linux** freely available has been well-received by the community. He teased the audience by asking if we wanted more, to muted applause. Mostly because we are an introverted bunch incapable of expressing our emotions with appropriate flare. Inside we were all applauding rapturously, I’m sure. 

Wim’s presentation was delightfully paced. He took us through Kubernetes as a reference framework for Network Automation before expounding in more detail on how our community can leverage the Kubernetes ecosystem to do more than orchestrate containers and explained the path to KubeNet as a new tool for configuring Network devices. This is the promised land for those us who have spent the last decade tinkering with field adjacent activities like Dev-Ops, Cloud, SRE, etc & infinity. 

My real time notes included:

Wim began outlining Nokia’s approach to network automation requirements, stipulating that the new era must be:

1. Consumable: Meaning easy to access and tend to. We want to be able to  play with stuff on our laptops maintainably. 
2. Predictable: Meaning it should actually work. Nice to automate once but it must continue to work systemically.
3. Collaborative: Meaning we need change and version control via GitOps and associated audit trails. 
4. Assisted: Meaning it should leverage the power of AI as a buddy or helper without expecting closed loop AGI. A reassuringly practical take in an unrelentingly absurd zeitgeist period. 

Wim then outlined what Kubernetes does for us to achieve our before stated aims. Kubernetes as the platform to do network automation because it is Open source, API Centric, Declarative, Extendable, Continuously Reconciliatory, Collaborative, Event Driven, AI Enabled, and has a Huge knowledge Base. Boom! 

Wim tabled the current use cases of Kubernetes amongst our technical peers as a tool for automating and orchestrating Containers, VMs, Clouds, Bare metal, Storage, Server workloads, Applications, mobile core/RAN and emergent AI use cases… notice anything missing that is close to our hearts? Why can’t we leverage the outstandingly mature ecosystem of Kubernetes to automate our Networks? Awkward pause.. Wim is a practical guy - so he birthed and built KubeNet himself! And all glory goes to him.   

All these industries use Kubernetes so why not Networks? Wim is on a mission so we can use Kubernetes to do just that. Dinesh would doubtless call this Tools 2.0. I would venture this is a giant leap, let’s be conservative and say Tools 2.5. As we will touch upon later in this post… some of us still have hope!  

Making networks consumable with Kubernetes

As we’ve seen, many other industries are adopting Kubernetes and we don’t want networking to be left behind. Particularly given we have bunch of people on the social media grabbing the limelight with the tagline takeaway from AutoCon0 in Denver: “Make Network Engineering Cool Again!”

Wim impressed upon us a new frame of reference. We can think of Kubernetes as a container life cycle management tool, sure - got it. KubeNet at is core is not focused on that! Rather than delivering containers KubeNet is delivering Network Artifacts. Using Vendor, Abstract, and Automation layer APIs. So rather than instantiating a POD we are configuring network devices. Using APIs constructs to generate and push config to network boxes. Whoa!

KubeNet will take our protocol abstract parameters which form our intent and then build what we need for our network to operate. Then provide a continuous reconciliation loop to check what we have against what we want and keep it in sync. Lovely. 

I for one can’t wait to see this project develop. I encourage people to keep a keen eye on (frankly everything Nokia is doing) but Wim & Roman in particular are just straight forwardly smashing it. Well done. 

KubeNet is written in Go and will need a scaled out K8s cluster in production - maybe you’ll learn these skills (I’m trying) or otherwise throw it over the fence to your Dev-Ops or SRE Team. But it’s about time we leveraged the whole ecosystem from Kubernetes. And KubeNet will help us learn how to build APIs. As this is required to define new services in Kubernetes. But don’t panic, KubeNet is an orchestrator so you can leverage python, ansible, terraform from KubeNet to bring the your Network change to life. Exciting times. 

As Ethan said in the Packet Pushers interview that followed the presentation  - this is A LOT! 

I’m currently in the awe and wonder naive and blissfully ignorant stage. I’m quite sure multitudinous skeptics and negative commentary will emerge that will prune my absurd expectations. I expect AutoCon2 in Denver this November to open my eyes to this project more. But right now I’m just grateful for Wim and everything Nokia are doing to bridge the gap to our dreams. Thank you. 

And now for my exquisitely profound (i’m British) insight to bring this all together as we approach the “moment of the conference” and the battle of accrued wisdom and naive hope. 

### **The Four Turnings of Network Automation: Where Are We Really?**

For those unfamiliar the Fourth Turning is a description of societal change through cycles. The current intellectual zeitgeist posits we are currently living through the Crisis period where societies are forced to rebuild, new institutions are forged, and unity emerges from chaos. Is there an analogy to be drawn to our evolution from conventional Network Engineering to our new tribe of Network Automation professionals? Kind of. Shaky. But i’ve started so I’ll finish. 

**The High, The Awakening, The Unraveling, and The Crisis**. 

Applying this to the networking industry, it's tempting to claim we're at the **crisis point**. But are we really there yet? Perhaps we're still in the **Awakening** or **Unraveling** phase? Opinions welcome!

#### **The Awakening: Freedom-Seeking and Automation’s Emergence**

Currently, we see a **surge in automation tools** and a collective desire for **freedom** from traditional vendor constraints. Network engineers are actively experimenting with open-source projects and bespoke automation solutions, challenging the status quo. This mirrors the **Awakening** phase, where **norms are questioned** and **innovation flourishes**.

#### **The Unraveling: Institutions Weaken, Networks Break**

Alternatively, we might be in the **Unraveling** phase. Here, the **institutions** that once provided stability (traditional network vendors and their solutions) are weakening. We're witnessing the consequences of **fragmented automation efforts**, with individualized scripts and bespoke solutions leading to **fragile networks**.

#### **Not Quite the Crisis Yet**

While there's a palpable tension and concern about the future, it's arguable that we haven't hit the **Crisis** point. We’re in the midst of a transformation where the old ways are being questioned, and new practices are being formed. The **true crisis** would come when the **deskilling** becomes apparent, and network engineers find themselves needing to pivot significantly or face obsolescence. Right now we are very much flourishing as far as I can tell. 

For now, we’re navigating the complexities and contradictions of these transitions, but we haven’t yet faced the full impact of what this automation-driven evolution will mean for the profession.

Closing Keynote: Peter Boers - Tech Lead of the Workflow Orchestrator Program. 

### Towards the Moment of the Conference: **“I totally disagree with you”**

The **moment of the conference** came at the very end of AutoCon1, in the questions following Peter Boers closing Keynote, which posed the question… “Are we building  Hall-9000 or Wall-E?.” 

I was fortunate to attend the Workshops in the days proceeding the main conference. The Container Lab session from Nokia was the clear stand out. But Peter Boers from SURF impressed with his demonstrable acumen and holistic orchestration perspective. Peter lives and breathes in the State sponsored and QANGO funded space. He is not subject to same commercial travails as most of us in the Enterprise & Telecoms money machines. Keep that in mind for later. 

Peters talk on the emergence of AIOPs referenced the desired architectural flow of Observe > Engage > Act. He explained the inherent need and urgency to lean into this ML & LLM assisted approach - as statistically evidenced by the lack of talent entering the networking profession. A timely reminder of that recurrent message that we need to make Network Engineering Cool again. There are simply not enough of us. (I have thoughts here - and a decidedly unpopular opinion I may develop another time… It’s gone down like a led balloon when I have brought it up in water cooler conversations at the AutoCons so far. Which makes me nervous to talk openly about it, but the gist is, we are no where close to as smart as we like to think we are. This field is full of comparatively shit technologists by reference to most other technical domains. Ut oh - I said it. To be clear - I am in the bottom percentile, my argument being I am of the few self aware or stupid enough to say it out loud. Note the ironically funny feedback loop there. Turtles. :-)) 

Peters point was that it’s ridiculous to fear that AI will take our jobs. More likely, it will relieve some of the strain of an already lean and work burdened sector. We are all pretty bored of hearing this following the LLM early hype cycle so we can skip the detail.  

When I saw the AutoCon1 speakers list Peters talk title stood out as the most intriguing. I assumed it would elucidate a narrative questioning if we are building high performance intelligent compute capable of solving real world problems akin to Bostrum’s 2014 SuperIntelligence predictions (Hall-9000) or if, in actuality, LLM models are just the first publicly notorious form of ML that can do a few fun and fluffy things and not much more (WALL-E). Alas, Peters talk did not pan out that way. My disappointment in the moment was ultimately salvaged by the debate that followed. Sweet!

But before we get to that, it’s worth quickly summarizing Peter’s take on Hollywoods historic commentary on AI themes.  

Good vs Evil:

Wall-e is nice and fluffy. He compacts trash. He, It, They (insert ensuing controversy) were built to help and clean up the earth. Then glitched and became able to think for himself (What the hell is consciousness? Anyhow…). A human conception of the Archetypical hero. Heart warming stuff.  

Hall-9000 is something scary. A ‘cold blooded’ (isn’t language beautiful) task orientated machine that controls everything. Built for “the accurate processing of information without distortion or concealment.” But it goes wrong. An order contradicts his directive. The ‘Strange Loop’ paradoxical feedback sets in with some ultimately harsh outcome for humankind. 

Peter declared that WALL-E & HALL-9000 started their life as good but malfunctioned into a stereotype. Before contextualising this to the here and now and our contemporary network automation agenda. So what now? Peter asked and answered - Intelligent Networks. AI will deliver the next paradigm. 

Peter’s conclusion was that Hollywood AI stereotypes should be avoided. (Shock horror. Not exactly the revelation I was hoping for. More a statement of the blindingly obvious.) Instead we need AI OPs for mundane tasks, so we can tackle more complex tasks. A perfectly fine perspective although I’m intrigued to see how our definitions and conceptions of what complexity really is begin to break down in the coming years. Much is ponderously in flux right now. 

SURF already have fully orchestrated provisioning. As displayed in their workshop of the Workflow Orchestrator they have built. You should check it out. 

Peters description of what SURF are building for the next Network Iteration of their high performance network is:

1. Open Source. “Need all the help we can get to build this thing.”
2. Keep it Simple - Make it Powerful. Start small and aim high. This is the path toward intelligent networks. 
3. Moving towards heterogeneous vendor agnostic architecture. Vendor X or Vendor Y -> and the AI still needs to exist.
4. A healthy service is described in multiple dimensions over time - which gets complicated. 
5. GNMI Telemetry.
6. Digital Twin for simulations and network planning. 

Peters description of his aims designing and building SURFs next generation of networks was building toward his ultimate thesis: 

It has to be open source and open standards. Therefore, Vendors need to provide us APIs that always look the same. Before declaring, with provocative emphasis, that Vendors need to support OpenConfig to enable multi vendor configuration. 

In summing up, Peter said Automation enables Orchestration so we can unlock the potential of an Intelligent Network. It was a decent talk. Good points well made. He must have been feeling good about himself. Respect. Applause ensued. We had made it to the end of the conference and he must have had every expectation there would be a few soft ball questions and notional praise for all the great work he had done at SURF to build such a high performant network machine. 

Then cometh Dinesh… **"I couldn’t disagree with you more.”** 

Dinesh said, “I couldn’t disagree with you more.  It’s really important to understand the context in which we operate.” I’ll paraphrase the rest of his diatribe … OpenConfig is zero. We have devices running that are a decades old. If it aint broke dont fix mentalities mean these devices are not being replaced anytime soon. Dinesh insisted that the first thing we should stop as a community is continue our push to OpenConfig and other vendor agnostic plays. He was harping on about the standard API because we are not going to get it. The longer we pursue this myth the longer we will be here asking why have we not seen full adoption of automation yet. We had the same problem from SNMP - it’s not changed. 

Of all the great lines being thrown back and forth during this wonderful exchange of frank opinions the most hilarious was:

Dinesh said: “We somehow think we will tell the vendors to get together and sing Kumbaya - ain’t happening!”

To which Peter retorted: “Maybe I am naive and young - but I do have some hope.”

Before Wim chimed in to provide a bridge between Dinesh & Peter by suggested, in ways evocative of his prior KubeNet remarks, that perhaps we as a community could get together and build an abstraction layer. 

So what were we seeing here? People fighting for their products. Just like every Vendor does. 

Dinesh has Susie Q that is built around SSH discovery and interacting with Vendor CLI in order to be operable in the here and now. 

Wim has KubeNet that will required the API abstraction layer to work. 

And Peter is building something shiny and new with vast quantities of public money that affords him the opportunity to think from first principles and behave aspiration-ally. And so he bloody should. 

People have different motivations and contexts. I began this post by referencing the allocation of capital in our industry… 

My thought here is they are obviously both correct. It’s a question of perspective. The apparent disjunction between Dinesh & Peter is explained not just by the grizzled and wise vs young and hopeful thing. It’s a function of the sectors in which they have build extraordinarily successful careers. 

We need more Peters. I am proud of him for standing his ground to the extent he did. But, if it was me, i like to think I would have ripped Dinesh a new one - despite him being perfectly correct and sagely wise on the matter. If the University and Public sector is not pushing for Open Systems and vendor agnostic solutions then who the fuck is? In Peter we trust. The personification of a vitally important component of our wonderful technology ecosystem. After all, Elon built SpaceX off the back off NASA and the US government funding. I wonder how long before Claudia gets to add the Mars mission to her space & automation analogies.   

Whatever the truth and ultimate outcome… it was a great dialogue, as Scott made clear in his closing remark. A truly delightful exchange. Thanks much Claudia, Dinesh, Peter & Wim. I like to think we will reflect on this at AutoCon10. I wonder where we will be. 

