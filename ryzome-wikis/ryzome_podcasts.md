**Episode 3**
```
Speaker 2 (00:00.63)
Hi, and welcome to Hello Complex, the podcast where we explore the rise of agentic AI and what it means for the future. I'm Tachi, co-founder and Sierra Playgrounds. And today is a very special behind the scenes episode with the Playgrounds team. We're the builders of RIG, RyZom, and the Art Complex. Today I'm joined by Thierry, Stolfer, Garance, Mochan, Josh, Mathew, and Mathews, core members of Playgrounds and the creators of RIG, RyZom, and the Art Ecosystem.

And in today's episode, we'll be pulling back the curtains on how Reg helps developers build reliable AI in Rust and how RISE on turns scattered thoughts and research into connected AI augmented canvases. And we'll be sharing a few early thoughts on where we see the AI space moving in general and how that impacts the direction of the ARC ecosystem. Along the way, we'll be sharing candid stories about building in public, shipping fast, breaking things, and what agentic AI means for real work today.

Let's get into it. Before starting, a quick brief on Playgrounds. Playgrounds started with a very simple idea. AI should be a tool to help people move faster, think better, and do their best work. And this is why we built two things, RIG for developers and Horizon for everyone who works with ideas. Before getting started, I would love to do a quick intro around the room.

starting with Thierry, if you could introduce yourself to our audience.

Speaker 2 (01:35.566)
Hi, Terry. And Stouffer, you're up next.

Yeah, hi guys. I'm Stofer, CTO of Playgrounds and Rust Enjoyer.

Speaker 3 (01:52.738)
Yes, hello. My name is Garance. I've been a full stack developer at Playgrounds for a bit more than two years now. And I'm very interested in everything related to AWS.

Amazing. And Mochan, you're up next.

Speaker 2 (02:17.835)
Awesome, Josh?

Speaker 2 (02:31.82)
Awesome. Thanks, Josh. Matthew?

Speaker 2 (02:43.95)
Love it. last but not least, Mathews.

Speaker 2 (02:58.474)
Awesome. It's really nice to have everyone on board and under call. I'm sure we're going to have a wonderful fireside conversation on everything going on. And let's start with RIG, the foundation that lets teams build AI applications the right way. So what exactly is RIG? Who is it for and why does it matter would be our first segment for this podcast. And for our audiences, here's a quick top level explanation on where RIG is.

You can think of Rig as a Rust LLM tool kit or a bag of tools that lets you build clean, powerful, scalable AI applications. Essentially, you can bring your specs or your problems and Rig help you build the agents that can search data, call different AI models, or even run on the browser using Wasm, all without duct tape. But let's actually talk to the architects and developers of Rig and get their take in descriptions of Rig.

And Stoffer, in your own words, how would you describe RIC to our audiences?

Speaker 1 (04:04.556)
I think from a non-technical standpoint, you can think of Rig as just something that allows you to use any LLM provider that you want to build your application, and also gives you the tools to scaffold a lot of use cases. So you don't have to rewrite the wheel every time.

Awesome. And in your own way, what was wrong with the typical or pre-existing AI dev stack that made you decide RIG needs to exist?

Well, I think, you know, having worked a lot with Python in the past, and especially large Python code bases, you know, Python is great for like small experimentations, but it tends to scale poorly when you increase the complexity and the size of your application. And prior to rig, unfortunately, most of the AI tooling was built using Python and to some lesser extent TypeScript. So, you know, when we...

wanted to build something in Rust, we were kind of out of luck, right? There was no good library to help us, know, scaffold our application and interact with all the different LLMs. So that was the main motivation to build Rust, to build RIC, sorry, ID Rust. And, you know, where that decision really shines to use Rust for such a library is, you know, when you think about...

these AI providers, right? They're always innovating, always adding more features to their AI models. But that also creates a lot of breaking changes when you're trying to interact with those models. One day, ChatGPT doesn't have image support. The other day, does. How does your application react to that? And with Python and TypeScript, sometimes you would realize that something changed when your application crashed in production.

Speaker 1 (06:03.49)
But with Rig and more generally with Rust, this is a sort of mistake or bug that you can catch way earlier in the development cycle. So when you're talking about AI where every time you write a prompt, it costs you money, bugs can get pretty expensive if they're not caught early. So that was the main motivator for us to build Rig. And I think the community has reacted very

This has resonated a lot with the community.

I definitely agree. I've seen the incredible growth of the Rig library over the last few months and it's been quite encouraging. So just to recap for our audiences, would you say the main motivator is building a library that focuses on reliability, performance, and it's provider agnostic?

That's a good way to put it. We support, I think, around a dozen different AI providers and adding more every month. So whether you're a grok maximalist or an open AI enthusiast, we got you covered. And really, it's also the ability to change between each of them, knowing that your code won't break.

Awesome. Thank you. Thank you for that clear explanation. I'm curious on Mochan, the other architect of the RIG library, in the development of the framework itself, what was one design choice in RIG that you believe quietly saves devs the day-to-day pain of building AI applications?

Speaker 2 (09:24.246)
Yeah, that's very interesting. I'm curious, Mochan. You know, there's quite a lot of frameworks and libraries out there, you know, some of which are pretty big. You know, we have Langchain being one of the biggest PyCon frameworks for building applications. How does Rigg compare to some of the alternatives in the market today?

Speaker 2 (11:35.15)
That's very compelling, especially for those who are currently deciding on what framework or library they need to build their next AI applications. It comes down to the decision between building something that is future-proof and can scale versus using an alternative for prototyping and experimentation, for example. Thank you for that insight, Mochan. I'd love to hear from

Josh, the senior engineer building RIG, I think you have the closest touch to the builders in the RIG community and also have the closest touch to some of the features and problem sets that are coming up from developers. So could you just for the audience give us your favorite story of what developers are building, what you're observing as people are interacting with RIG today?

Speaker 2 (13:58.634)
Awesome. That's really exciting. I've spent some time looking at the discussion sections and some of the issues on the rig, GitHub repo. It's really cool. Even how global it is as well. think that we were talking about how we saw some contributors writing in Mandarin in their issues and then you were responding in Mandarin. think that was quite exciting. Yeah.

Speaker 2 (14:30.465)
That's amazing. That's amazing. I have a few more questions for you, Josh. What are some of the most asked questions about Rake? And this is your opportunity to essentially give like a download of FAQs with answers, maybe like the top three or four top questions being asked.

Speaker 2 (16:07.362)
We.

Speaker 2 (16:37.814)
Yeah, that's awesome. And I appreciate the care. When we, when Rigg had a breakout in the community, one of the feedbacks that stuck to me to this very day, was the founder of Abstract Chain. And he mentioned that Rigg is the most well-maintained and thoughtfully designed library out there today.

And I think that's a testament to the care that they use, Dover, Mochan put into making sure that every decision is well thought out and specced out and not rushing to release features that might introduce breaking changes or tech debt in the future. So wonderful, wonderful work with that. Just a few more questions. I think this is more of a rapid fire one actually. What is one tip?

that you would give to a dev who's moving from a Python stack to a Rust plus a Rake stack.

Speaker 2 (17:59.938)
I'm curious and still first.

I would add, yeah, I would add, you know, listen to the compiler, trust the compiler. You know, if you, it's not like other languages, like the compiler will tell you exactly what's wrong with your code. You just have to read the message, right? So it's a different mindset, but it helps a lot in the long run.

Yeah, and Mochan, what would be your tip?

Speaker 2 (19:51.414)
Amazing. Thank you. So Rust is great. It has the right tools. Use the compiler. It's your best friend. And as Josh said, if you run into issues, drop an issue on the repo or join us in Discord and we'll be happy to help you out. Thanks, guys. Before we wrap things up on Rig, I want to a sense and maybe give our audience a sense of the adoption of Rig. And this is kind of passing the mic back to our in-house evangelists of the Rig library.

What are some exciting statistics on adoption for the Rig library today? Who's using it?

Speaker 2 (21:50.508)
You prepared and for our audiences listening, these talks and where to find them will be available in the show notes. So just to encapsulate everything we've talked about with Reg, Reg essentially is a library that allows you to ship powerful, scalable, well-written AI applications. It comes with dozens of examples and tools and documentations to help you get off the ground. It's designed for multi-agent orchestration.

and applications all the way from vector searches across quadrant, Milvus, Postgres, SQLite. It's provider agnostic, which means that you can mix and match, swap, or chain models like OpenAI, Anthropic, Grok, XAI, DeepSeq, and many more. And it also has the RigWazim integration, which allows you to build AI applications that can run natively in your browser. Essentially, it's a toolkit that allows a dev to not just imagine what they can build,

but also have the right tools to have a starting point that can scale. I really appreciate the conversations Mochan, Stolfer and Josh, and thank you for your hard work on building the Rig library. So if Rig helps developers build AI systems, what about non-developers? Those who are not interested or in the market for building the applications, but they need a powerful tool

to do their day-to-day work, to use AI to augment how they do knowledge exploration, knowledge management, produce outcomes that are meaningful to whatever work it is they're doing on a day-to-day. What kind of tools might exist and how can we produce that and deliver that to the end users? We've built something really special in Playgrounds and it's called Horizon.

And of course, in true fashion, RyZoom is a service or an application that's built on top of the Rig library. So in this next segment, I'll be introducing, you know, what this service is and the pain points it's trying to solve. I think it's best to start by painting a picture. Many of us in our day-to-day work, you know, most of us are already using applications like ChatGPT, Cloud and the rest. We end up reaching a point where

Speaker 2 (24:12.706)
We've done so much work and research. We're brainstorming an idea. We're thinking about, you know, what the next iteration of a report or a paper or we're doing some, you know, deep research on some obscure topic. And we get to a point where using platforms like chat, GPT's chat interface and quad becomes actually limiting to the type of work that we need to do. Your ideas starts to get scattered around multiple chats.

multiple threads with no easy way to branch out of these chat threads. And you end up having silos of information with no way to recombine them or have a better view of what your mind has created over time. The truth is linear threads don't necessarily match how our minds work. Our minds work in networks. You start with one idea and it branches out into two or three that are still connected in some way.

And with the current interfaces that are available in the market today, it's very easy for your context to get lost in multiple threads. It's very easy for your momentum to die as you try to find where that insight you had, you know, seven hours ago or two days ago is in hundreds of threads and tabs. The truth is the current form factor of AI chat apps is very limited and we identify it as problems.

and devise a way to solve this. And that's what Rhizome is. Rhizome is our answer to an AI enhanced environment or as we call it, a workspace where you can maximize what you can do with AI with your day-to-day work. And for this, I'd love to, folding Thierry, to introduce Rhizome and tell the audience what it is and what it's trying to solve.

It's Yuri.

Speaker 2 (29:42.168)
Thank you. I think that's a very powerful way to describe, you know, the design philosophy of what rhizome is and what rhizome is not. I'm curious also, Stoffer, if you have a way to describe rhizome to add on to what Thierry has described.

Speaker 1 (30:03.04)
Yeah, I think to add to what he was saying about automation, you know, you would think that LLMs, you know, are, would be very good on automation and they are to some extent for specific parts of it. But there's definitely an over reliance on LLMs in many cases where let's say you want to build some, you know, workflow that, you know, fetches your inbox, your email.

your emails in your inbox, sorts them in some different buckets, then depending on the bucket, do something else. Often you'll see people try to use LLMs at every step. Well, you don't need an LLM to fetch your inbox emails. Going through an LLM could actually lead to worse results. And the first iteration of Ryzone was leaning a bit more in that direction. But

Now that we've refocused more on the ideation, but also just the processing of documents, it's like, OK, here's a draft of some project I'm working on. Can you extract me some user stories or some tasks? What are some common pitfalls about my idea? Things like that. And then have that organized in Canvas. LLMs are language models. They're not tool models. And in that sense,

Ryzone is a language app, first and foremost.

Speaker 2 (33:08.216)
Thank you. This is really compelling and I think it's quite a different approach to not only seeing what LLMs should be, but especially how they should be used for real work. I think this could be very interesting to a lot of our audiences, whether they're technical or non-technical, are curious on what else can we do with AI today. I think that you've kind of laid it out.

in a very clear way and why we're taking some might say quite a different direction than what most application developers in the AI space are taking today. I'm curious now on kind of the day to day and the product itself. So let's give our audience who might not be aware or familiar with Rhizome, and this is for you, Gurant, if you could give an overlay on Rhizome, feature sets.

And what are the experiences like when someone gets on Ryzone, if today?

Yeah. So the idea of Rhizome is kind of like a virtual whiteboard. So in more detail, basically, it will allow you to connect ideas together. And an idea can be text, an image. For now, we just have text and images. But to connect those with an AI model such that

this AI model can receive this content that you give it, generate new information based on this, and then you can keep building off of what the AI model has generated, and you can do so kind of infinitely in all directions. And so it'll allow you to kind of organize your thoughts.

Speaker 3 (35:10.23)
with a helper to guide you.

So essentially it's a blank canvas. So I'm going to walk through the steps just as a visual audio representation. So it's a blank canvas. And on this canvas, you are presented with some object that allows you to insert your content. And we call these nodes, as you say. And so a node is essentially kind of like a text or image input environment or container.

And then you can connect multiple nodes together, and we connect them with what you call them edges. And we can infinitely connect multiple nodes together. And each node is essentially AI augmented. Would that be a good way to describe the application components?

the years.

Speaker 3 (36:05.57)
Yes, yes.

that's really interesting. In your opinion, what's something really exciting or cool about Ryzone that you've built that you're really looking forward to people experiencing once they encounter it for the first time?

Something the team has built that is really cool is the thinking and the streaming of agent text into the Horizon Canvas. So basically when you ask a question or when you put a prompt in your node, the agent will show you step by step what it's thinking.

as it's determining an answer. And while it's generating text, it's going to show it step by step so that you get the response. Not all at once, but slowly. And I think that's going to be a really good tool for people to use.

No, that's really awesome, Goran. So I'm really excited for people to experience using Ryzone. I've tested out a lot of these features, image drop-in, copy pasting, and even the markdown, the decision to go through to markdown, which is curious as well. Why did we decide markdown to be the way to input or type in text into Ryzone?

Speaker 3 (37:50.306)
That's a good question. think it's because Markdown is so easy to use because you're just writing plain text. And not only that, but you can integrate different content types in Markdown. You can integrate images, files, audio, all in text. And it makes it so that it's all

all those different content types can be reunited in a single node and just by using this very easy language. And with Ryzone, you can use Markdown with image, you can add images into your Markdown and the agent will be able to...

extract those images and use them in its context. So I think it's a good way to unite all these different types of content type into a single node.

And, know, in the world of AI today, there's so many models. have Gemini, have Cloud, GPT, XAI, there's a myriad of them. That's not if and including the open source local models as well. What model are we using in Rhizome and why did we make that decision?

Speaker 3 (39:23.478)
we are using the Gemini models. due to streaming, we can actually have more powerful models because the more powerful models take a bit longer to answer. And so with streaming, there's less of a lag between when the user asks a question and when the model starts to answer. So the streaming.

implementation really allows us to leverage the more powerful models.

I see. see. That's really compelling. And I love to pass the mic off to Stoffer as well. I think this was one of the discussions we had internally when it came to deciding which model was the best. know, could you share with the audience some of the tradeoffs that we were aware of if there was any between choosing Gemini and not other models as well? And what are some things that that you might get?

with Gemini that you might not get with other models.

Yeah. So, I mean, few people know this because it was, when rise on was still closed, like a closed beta, but we used to support, many models and had the ability to let users, you know, choose their models, enter their own API keys, whatever. And, you know, initially we thought, more power to the users means, you know, better product, right? But it out there's actually a blocker to our big surprise.

Speaker 1 (40:57.102)
because most people just want something that works well out of the box. And we then took the decision to essentially pick a model and stick to it and really go deep in it. And that model that we landed on was Gemini for a couple of reasons. But the most compelling is that it supports the widest range of different content types.

which they're not all supported in Ryzone yet, but we're adding more and more every day. And without leaking too much of the future, the coming features, one of the things we're really excited about is Gemini's ability to handle YouTube videos as a first-class citizen, right? So eventually you'll be able to just drop in a YouTube video, have the AI essentially watch the video for you.

And then you can use, you can essentially ask it anything about the video. So we're not closing the door to supporting other models in the future, but for now we are definitely sticking with one that supports the widest range of use cases and that just works really well in practice.

That makes a lot of sense. really appreciate the clarity on that and looking forward to that feature of having YouTube videos being first class citizens, I think that'll add a powerful capabilities to what users can do with Rhizome. Let's talk about Zoom TM. So we've talked a little bit about what it is, what it's not, and some of the features that comes with Rhizome.

Soon, T.S.

Speaker 2 (42:38.734)
Let's talk about some of the stories and use cases. And I'll have to pass the mic off to Mathieu, who handles the management of the product and consumers of Rizon. Could you give us a little bit of a vignette on Rizon's use cases and story?

Yeah. So the first discussion with Siri and Stoffer, I think really shed the light on behind the core vision of what we're trying to do here. First, we're trying to move away from like end-to-end automation that results like in super brittle apps that don't really do what you're trying to do. And secondly, like these first chatbots or the first gen AI apps that we've seen with ChatGPT, Gemini and pretty much like all the competitors.

Like it tends to try to do too much even with super small prompts. And we've seen that with deep research, the deep research features that they pretty much all rolled out. It's quite useful and it's very impressive, but at the end, it's really trying to expand the super small prompt to in a gigantic report that is quite hard to use at the end depending on your use case, right? So either if you're a...

a researcher or a researcher trying to build a bibliography for your research, a founder trying to better understand links and action items after some customer interviews, or a writer trying to map out some new ideas for a book. These are all quite complex use cases that

thing like that, that features like deep research will probably give you a good starting point, but it won't help you actually do the actual work. And I think it's a core feature of Rise on here, like a core thing that we're trying to do is instead of using LLMs to give you a good starting point on a project or on some work, that it can really be the kind of work

Speaker 4 (44:52.258)
workspace or workplace where you can accomplish this work and end up with real actionable either documents, action items or whatever you're trying to really accomplish here.

Interesting. So if you could categorize the user profiles, what would those shapes look like today? I know it's still pretty early, but what are some emergence profiles that we're in Join or we're anticipating in Join Ryzone?

So we can see kind of two categories. First, there's the categories where you have a lot of content as input. So these would be, as I said, people like researchers, either academic or in the finance world, right? You have a ton of content as input that you're trying to find the difference between noise and the...

like real information in these documents. And of course, like your researcher, Rhizome can help you grouping into different themes or categories, the content that you're putting as input, where it be in PDFs, soon web pages or linked to your own data storage like Google Drive. And then visually map.

different categories before you can try and apply your own knowledge on top of this work. So first use case would be users where users trying to map out their own content or trying to search for new content. And then the second kind of category of use case would be users that try to generate a lot of content. So one could be a writer trying to just

Speaker 4 (46:55.662)
brain dump some key themes or key ideas and then do some iterative work to try to map its characters or map the different chapters or scenes that would let these characters interact to each other.

Amazing. Okay, so two categories, the explorers and then the creators. And so the explorers could be researchers, students, ideators who essentially have a lot of information to navigate. And they need an AI companion in their note-taking or knowledge management environment to do so. And then we have the creators who the ones who generate new knowledge or build on top of old knowledge, so writers.

Maybe even founders who want to create new iterations of your product and they want to write about it. That's very compelling. I'm also very curious on the new types of use cases and uses that will emerge the more Rhizome matures. I think that I'm really excited about content creators. I they do fall under the creator category. Once we have YouTube and video support, more multimodality capabilities in Rhizome.

But that's really compelling. I know you manage a lot of the product management and you have a close touch with the users. Has there been any interesting stories so far that you've seen?

Yeah, well, we look quite a bit at the user recordings or try to better understand from the data that we are able to retrieve in the app trying to better, because we might have our own ideas of what users are trying to do. And I think that the two tags that you gave, explorers and creators, that's such a great naming scheme. But behind these more large concepts,

Speaker 4 (48:59.278)
What are the actual actions that users are trying to do? since you can compound this at an infinite level, anytime you see a canvas with hundreds of nodes being all intertwined, it's really mesmerizing to look at. And it's quite an enjoyable activity to do.

Mesmerizing is the right word there. Thank you. Thank you for painting a picture of what's coming out of Ryzone today and what we're looking forward to. And I'm also curious, Matus, I you are, you you're a great front end developer. You've been helping us design and build the user experience with Ryzone. And you've done incredible work with focusing on the

the intuitiveness and the feel of Rhizome. Could you tell us a little bit about your philosophy and how you go about making sure that the user interface and the experience of Rhizome is as intuitive as possible? What's your process like and what's your design philosophy in general?

Speaker 2 (51:09.442)
Amazing. That's a really good philosophy to have. And I think that it shows in the way you've approached everything from the dashboard to the way the components are designed, the way the edges are designed, and just the full user flow on that. What are some really interesting or experimental maybe approaches that you've taken to Ryzone that you're excited to see users experience?

Speaker 2 (52:38.156)
Amazing. That's really, really interesting. Before wrapping it up, let's talk about some of the features. know, recently, I think this was yesterday, we made an announcement for some of the newest features available in Ryzone. Just for our audience, know, some of these include, you know, cross-canvas intelligence. And what that really means is being able to essentially copy your nodes or your content across multiple canvases. And this essentially allows the unlock of information.

You might be doing research on one topic in one canvas, but being able to migrate that through copy-paste into another canvas so you can continue building off of that is really compelling. As Grant mentioned earlier, being able to see the AI as its reasons and streams a response is one that we really are excited about because it increases the immersive experience that you get with Ryzone.

putting a lot of effort into the organization and cleanliness of nodes and your canvas in general. And so we started with node labeling, which allows you to tag and label your nodes, but also use those tags as references in another prompt and many, many other features that have been released recently. But before we wrap it up, maybe Terry, if you can give a glimpse of some of the features that you're excited that are coming up over the next few weeks.

Speaker 5 (54:23.831)
Yes.

That's a really exciting one. Collaboration, sharing, publishing. I think the community and user base would really love that. So you can be not only a creator, but a distributor of your work. Thank you guys so much for the deep dive into Ryzone. I think this is a really fun conversations and I'm beaming with smiles just listening to you guys just share this opus that you're creating with Ryzone.

It's quite a lot of work, but the mission is pretty clear, and I appreciate the efforts into building something that's meaningful. So the main goal with Ryzone is less software, more flow. And I think that we're really, you know, zeroing in on something really compelling, specifically a pain point that exists in the market today. And so anyone who's interested in getting started with Ryzone, the details will be in the show notes.

and go to rhizome.ai, that's R-Y-Z-O-M-E dot AI to get started with Rhizome. And we'll be looking forward to seeing what you create and share across social media and join our Discord if you're interested in talking to us a little bit more about Rhizome or if you have any features or questions about it. The final segment of this podcast is for the third.

thing that we build at Playgrounds, which is the Arc Complex, or as we call it, the Arc Ecosystem. And the Arc Ecosystem, for those who are not familiar, is a coordination layer that essentially orchestrates and incentivize the development of not only powerful AI applications, but users to discover and use these powerful applications. We released the Arc Ecosystem, at least what I like to call the prologue of it, last year in December.

Speaker 2 (56:17.708)
And it's been thriving, you know, we've seen a lot of members of the community join in to, you know, lend their intelligence and expertise towards building agents and applications, sharing excitement about what's going on in the AI space. And we've seen a lot of growth of developers coming out of the ecosystem to contribute to the rig library. We've had projects come in that's built amazing project like Sograph, Listen, Agent Tank, as Jimmy and the rest of them.

And in this segment, I will just give a teaser or a tidbit on what the next chapter of the ARC ecosystem is going to look like. It's still very early, so I won't go into too much details, but this would just essentially set the stage for our listeners to kind of absorb and maybe have a food for thought. Over the last few years, AI has learned a lot from us, mostly in one big gulp, honestly.

And the industry is optimized for extraction. You capture expertise once, you train a model and you move on. The problem is simple when you think about it. Extraction only works once. It doesn't keep experts in the loop and it stalls the long tail of real world problems. But what if we flipped the incentive from extraction to evolution? Arc is our exploration of a coordination layer where improvements are continuous,

verified and fairly attributed. In this future that we're designing, app developers can ask for specific upgrades to a model, domain experts can contribute the know-how, improvements are tested against clear benchmarks, and when those improvements are used, the people who made them possible share in the value. There's no hype here, it's just principles and attribution you can trust and rewards tied to real usage.

It's about turning expertise into a renewable resource so AI keeps getting better with us and not without us. We're still early in the development of the next chapter of Arc, but we're listening, we're prototyping, we're researching, we're interviewing founders and developers in the space, and we're pressure testing ideas with builders and experts. I won't go too much into the details of the mechanics today, but if it resonates with you, I want to hear from you.

Speaker 2 (58:43.274)
Arc is shifting from a one-time harvest to continuous growth and for extracting value to compounding it together. There'll be more details on the next chapter of Arc once it's live, but I'm really excited for the direction that we're taking things to with the Arc ecosystem. And that's where I'll leave that for the Arc ecosystem. There's more to come. It's been a wonderful, wonderful podcast episode today.

I really appreciate the time that the team has spent talking about everything that's going on within everything that we're building from RIG to Ryzone to the Arc ecosystem. And before wrapping it up, I would love to do a fun, quick lightning round Q &A style question for the team. I'll start with Garance. Just lightning round question. Are you ready?

I'm ready.

All right. What is a feature that's not available in Ryzone that you're really looking forward to building at some time when you have the time?

This is a feature like way down the road, but I'm really excited about having a meta agent in Rhizome. So it would be an agent that can modify your Rhizome canvas for you based on a set of instructions.

Speaker 4 (01:00:08.695)
Ooh.

Very cool. I love it. The meta agent in Ryzone. Thank you, Gurans. Matus, is there any interesting features or components that are coming up soon with Ryzone that you're excited to share with the community once it's live?

Speaker 2 (01:00:42.574)
Cool.

Speaker 2 (01:02:01.71)
Amazing. Thank you so much, Matus. Really, really excited to have you build in Rhizome. And I'm sure the Rhizome users and the community appreciate all of the amazing effort and thoughtfulness that you put into designing every component within the Rhizome environments. Thank you. Josh, your next lightning round question. What is one rig example that every dev should try first?

Speaker 2 (01:02:46.51)
And Terry, you're next. What is a moment a user surprised you with Ryzone?

Speaker 2 (01:03:33.824)
Amazing. big fan of Kazoo. It's one of our biggest evangelists for Ryzone. Next up, Stolfer. Are you ready? What is one myth about AI that you wish would just die?

Oh, I mean, man, there's so many of them. But if I had to pick one, it would be that AIs can't read your mind. So next time you're trying to vibe debug your app, instead of just saying, my app doesn't work, fix it. Give it some context. Say, hey, this particular thing doesn't work. I've checked these things, so I know it's not x, y, I'm using this stack, this click, blah, blah, blah, here's my API, whatever. The more you give it, the better it's going to.

Amazing. Thank you. Matu, you're next. What's the best software more flow decision with Ryzone that we've made recently that you're excited about?

Hmm.

I guess it would have to be or well actually a very good example is what we call content drop-in. So the ability to seamlessly add note content in your canvas just by copy pasting instead of having to go through a complex import flow either for a file or even it would be like in our next features and using Google Drive and stuff. So just simple copy paste, boom it's there and you can use it.

Speaker 2 (01:05:08.63)
Amazing. Thank you. And last but not least, Mochan. What's something that excite you about the future of Rake?

Speaker 2 (01:06:09.888)
Amazing. Thank you. Well, we did it guys. That was a wonderful podcast. That's it for the special Playgrounds Roundtable of Hello Complex. thanks to Thierry, Stolfer, Garan, Smochan, Josh, Mathew and Mathews. Thank you all so much for listening. If you want to build AI in Rust, check out RIG. If you want to think and research with AI that understands your content and context, try Rizome.

It's live at rhizome.ai. And if the vision for Arc sparks something, reach out to us. We're listening and we'll love to hear what you're thinking and building. Thank you so much for hanging out with us. And from all of us at Playgrounds, let's build the tools that help us think, create, and deploy at the speed of curiosity. And see you next time.

```
