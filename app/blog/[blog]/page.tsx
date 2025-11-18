import React from "react";
import Image from 'next/legacy/image';
import BlogSlider from "./blogSlider";

interface BlogProps {
    params?: Record<string, unknown>; // Replace 'Record<string, unknown>' with a more specific type if known
}

export default async function Blog(props: BlogProps) {
    const params = await props?.params;
    // console.log(`params ======>${JSON.stringify(params)})`);
    // console.log(`params id ======>${params?.blog}`);
    // const id = params?.blog?.split("/")
 
    const blogDetailsData = [
        {
            id: "how-to-do-market-research",
            author:{
                name:"By Preksha Razdan",
                designation: "Investment Analyst",
                image: "/blogs/prekshaRazdan.svg"
            }, 
            title: "How to do market research?",
            image: "/blogs/market-research.svg",

            description: `
                <p>“A staggering 42 % of startups meet their demise due to absence of market need”</p>
                <p><b> - Maeve Couch, Antler</b></p>
                <p> Most startups die not because the product is bad, but because it solves a problem no one really cares about.So before building, the first step is to find a real, significant problem.One that actually matters to people.One that hurts enough that they would pay to fix it. </br></p >
                <p> <b>How do you know if it is worth solving ?</b> </p>
                <p> You can use a simple six - point check given by Antler:</p>
                <p> <b>Is the problem painful, popular, frequent, urgent, growing, or unavoidable?  </b>
                <p> Upon returning to India, Sidhant Keshwani dedicated a year to rigorous market research in the e - commerce and fashion sectors. </p>
                <p>"During my research, I identified a significant gap in the Indian wear segment, especially within fast fashion. I noticed that Indian wear hadn't evolved much over the past 30-40 years, and there were very few organized, modern options available. Additionally, I observed a shift in consumer preferences toward Western wear, which highlighted the need for innovation in Indian fashion. This insight inspired me to launch Libas, a brand aimed at modernizing and rejuvenating Indian wear," shares Sidhant Keshwani, Founder & CEO, Libas. </p>
                <p>“The entire process from conceptualization to going live took about <b>six months</b>” </p>
                <p>
                - Aashka Goradia Goble,</br>
                Co-Founder, Renee Cosmetics
                </p>
            `,
            description_list: `
                <p> Let's start with inversion theory - how NOT to do market research?</p>
                <p>- Your TAM does not include 8 billion people.</p>
                <p>- Copy-pasting data from paid reports without knowing what those segments even mean.</p>
                <p>- Ignoring the supply side.</p>
                <p>- Having no idea how the numbers were actually calculated.</p>
                <p>- Forgetting to iterate</p>
                <p>- “Others” is not a segment.</p>
                <p>- And please don't overdo it.</p>

                <p>I have made all these mistakes. So this is more about what has worked for me, you can be more creative with your own process. The goal here is to make sense of how to think about market sizing and when it actually matters. What that “Market size” slide really means?
                To investors, that slide is not just about how big your number is. It shows how deeply you understand your user and the problem you're solving. You can't fake that understanding, it shows in how you build the logic behind the numbers. So how do you get there?</p>

                <p><b>1. Demand side market sizing</b></p>
                <p>The TAM, SAM, SOM framework works when you are looking at existing, defined markets. Start simple, figure out what the industry looks like, what segments exist, and where you fit in. Before touching a single number, make sure you understand the definitions so clearly that you can explain them to a 10-year old.</p>
                <p>Once you have the segments, make them MECE - mutually exclusive, collectively exhaustive. No overlaps. No gaps. Like in clothing, male and female clothing together make up the whole, without overlap.
                <p>But sometimes, you are not in a well-defined market. You are not looking at a well defined market or causing some disruption in the market. That is when the Beachhead Framework by Jim Goetz comes in, Facebook used it in the early days.
                <p>The idea is to win one segment at a time. Facebook started with Harvard, then expanded to Stanford, Yale, and Columbia, building network effects that made the product more valuable as more people joined.
                <p>“We do not want the beachhead market to be the biggest possible market, but the lowest hanging fruit that is big enough to be cashflow positive and create a position to win additional markets.”
                — Bill Aulet, MIT Sources to get numbers from: DRHPs, annual reports, investor presentations, government surveys, thought leaders, research papers, opinion pieces.</p>
                <p><b>2. Supply side market sizing</b></p>
                <p>Here is where most people skip, understanding your customer's behavior.</p>
                <p><b>Ask things like:</b></p>
                <p>- How often do they do this activity? - How long does it last each time? - How much do they spend? - What triggers it?
                The best way to find answers, talk to people. Founders who have built in this space. Investors who have backed similar models. Thought leaders who have studied it.
                The point is not to sound smart, it is to validate your assumptions and stress test your hypotheses. Step 2: Understand the business models
                Look back 10 years. What worked? What failed? Why? What was external (market timing, regulation, capital)? What was internal (pricing, execution, founder choices)?
                ***Personal experience - I learned this the hard way. When I was studying consumer brands, everyone said customization was the next big thing. I went mystery shopping, the experience was broken end to end. It made me realize that what looks good on paper rarely survives real customers.Step 3: Use social tools smartly
                Not Facebook or Instagram. Use Topmate, CoffeeMug, or even LinkedIn (some people drop Calendly links right there). These are goldmines for learning from people who have done it before.
                Because honestly, you do not have the time to make every mistake yourself. Step 4: Do not overdo it
                This one is personal. I have spent weeks going down rabbit holes, and it feels productive until it is not. Market research never ends. You just need to know when to stop.
                Put a cap. Know what you are looking for. And once you have enough to make a sound call, move on. *** Personal experience  - When I was studying new sector's in my initial days, I would spend 20 - 30 days diving deep into a sector, mapping every little detail possible, but at the end of it if I had to pick up 5 points which I would like the reader to know about the market, I got nothing because my research was scattered and not directional. My learning - Give yourself 2 - 3 days to understand the keywords, another week to understand the market overview and ask yourself, what 5 things do I know about this market now. Repeat the cycle continuously. 
                </p>
                `
        },{
            id: "understanding-business-models",
            author: {
                name: "By Ninaad Singh Shekhawat",
                designation: "Investment Analyst",
                image: "/blogs/author.svg"
            }, 
            designation: "Investment Analyst",
            title: "Understanding Business Models",
            image: "/blogs/businessModels.svg",
            description: `
            <p>Why is it that some companies thrive while others fail despite having great ideas?</p>

            <p>The answer to this lies in their business model, which tells us about how a company creates and captures value in the
            market. A business model should narrate the story of a company: who its target customers are? what are they looking
            for? and how the company delivers it profitably?</p>


            <p>“Innovation distinguishes between a leader and a follower.”</p>
            <p> - Steve Jobs</p>



            <p>Let us start by clarifying a common confusion: business model vs. strategy vs. tactics.</p>

            <p>Your business model is the framework of how everything fits together, strategy is the roadmap for competing effectively within that framework and tactics are the short-term actions which you take along the way.</p>

            <p>Consider Apple's business model revolves around premium devices and a seamless ecosystem. Its strategy? Staying
            ahead with innovation and design. Its tactics? Launching special editions, seasonal discounts, or marketing campaigns.</p>

            <p>Understanding these difference helps a company stay aligned and avoid destructive competition which wastes energy
            and resources.</p>

            <p><b>A business model also evolves over time and most of these evolutions pass through three stages:</b></p>
            `,
            description_list: `
                <p><b>1. Creation: </b>This is the phase in which we discover gaps customer needs. Like, the founders of Airbnb realizing people wanted cheaper and more private travel experiences than what hotels offer. </p>

                <p><b>2. Sustaining Innovation:</b> Once the customers is on board, our focus shifts towards scaling and improving theofferings. A classic example for this would be Netflix constantly refining its recommendation engine and content library according to the tastes and preferences of their customers to keep them engaged. </p>

                <p><b>3. Efficiency in Innovation:</b> Eventually, the target is to optimize operations to maximize returns. Like, Amazon streamlining its supply chain and using automation to keep costs low without compromising on quality. </p>

                <p>All parts of a business model, be it value proposition, resources, processes or profit formula are interconnected. As the company grows over years, these connections become more rigid, thus reducing the flexibility of the model. This is the reason why forcing new ideas into an old business unit often fails. </p>

                <p>It is like Blockbuster trying to do DVD by mail. A classic example of idea fighting against existing priorities. </p>

                <p>To tackle this problem is where customer-centric innovation and autonomy come in. New ventures within a company need the freedom to experiment without being tied up to the parent company’s old styles. Reliance Jio, for example, was launched as a separate unit from the traditional energy businesses of Reliance Industries. Being free from the constraints of the oil and gas legacy of Reliance Industries, Jio redefined connectivity in India and became a textbook example of a business model innovation done right. </p>

                <p>Business models may come in different varieties, but its ideal usability is derived by how creatively a companies are able to structure them to solve real problems. Some models are everywhere, like subscriptions or freemiums, while others are a bit more innovative, such as: </p>

                <p><b>1. Marketplace Models:</b> Companies like Urban Company and Meesho connect service professionals and resellers with customers, creating scalable platforms that are empowering small businesses and entrepreneurs. </p>

                <p><b>2. Sharing Economy Models:</b> Platforms such as Zoom car and Rentomojo allow individuals to rent vehicles and furniture, promoting a culture of access over ownership and catering to the evolving needs of urban consumers. </p>

                <p><b>3. Outcome-Based Models:</b> Razorpay offers performance-based pricing for its payment solutions, aligning its success with that of its clients and demonstrating a commitment to mutual growth. </p>


               <div> “The more you drive positive change, the more enhanced your business model.” </div>
               <p> <b>-Anand Mahindra </b></p>

                <p>Business models are not supposed to be rigid, they must evolve through experimentation, feedback, and adaptation. </p>

                <p>So next time you use an app to shop online or book a ride, take a second and think - What is the story behind this company? That story is its business model, it is the secret ingredient that decides if it becomes the next unicorn or just another cautionary tale. </p>
             
             `
        }
    ];

    const blogDetails = blogDetailsData.filter(details => details.id === `${params?.blog}`);
    const singleBlogDetails = blogDetails[0];

    // console.log(`blogDetails======>${JSON.stringify(blogDetails)}`);
    // console.log(`singleBlogDetails======>${JSON.stringify(singleBlogDetails)}`);

    return (<>
        <section className=" md:mt-8 mb-5 container mx-auto w-full p-4 md:p-0">
            <div className=" w-full">
                {/* <h1 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-600">{singleBlogDetails?.title}</h1> */}
                <div className="flex flex-col items-start justify-start gap-2 text-left">
                    <div className="w-full rounded-md">
                        <Image
                            className="dark:invert  md:min-w-[544px] md:min-h-[340px] rounded-md"
                            src={singleBlogDetails.image}
                            alt="logo"
                            width={544}
                            height={340}
                        />
                    </div>
                    <div className="text-zinc-600">
                        {/* <div className="text-zinc-600 text-xs mt-1 mb-4 font-normal">{singleBlogDetails.author}</div> */}
                        <div className="text-2xl md:text-4xl font-bold mb-2 ">{singleBlogDetails.title}</div>
                        <div className=" font-medium text-xs md:text-sm text-left "><div className="[&_div]:text-blue-800 [&_p]:mb-4 [&_b]:font-bold" dangerouslySetInnerHTML={{ __html: singleBlogDetails.description }} /></div>
                        <div className=" font-medium text-xs md:text-sm text-left "><div className="[&_div]:text-blue-800 [&_p]:mb-4 [&_b]:font-bold" dangerouslySetInnerHTML={{ __html: singleBlogDetails.description_list }} /></div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-50 p-4 flex gap-2 w-full  md:max-w-[50%] rounded-sm">
                <div className="h-[80px] md:h-[100px] ">
                    <Image
                        className="dark:invert h-auto w-full rounded-md max-w-[80px] md:max-w-[100px]"
                        src={singleBlogDetails.author.image}
                        alt="logo"
                        width={100}
                        height={100}
                     
                    />
                </div>
                <div className="flex flex-col items-start justify-center gap-1 text-left">
                    <div className="text-zinc-600 text-lg md:text-2xl font-bold " >{singleBlogDetails.author.name}</div>
                    <div className="text-blue-900">{singleBlogDetails.author.designation}</div>
                </div>
            </div>


            {/* <div className="w-full mb-4 hidden md:block">
                        <div className=" flex  md:gap-4 gap-2 items-center justify-between bg-blue-100 px-2 rounded-md  w-full md:max-w-[90%] ">
                            <input type="email" id="subscribeEmail" name="subscribeEmail" className="w-full max-w-[90%] p-2 focus:outline-none bg-transparent" placeholder="Enter your email" />
                            <button aria-label="Submit" className="outline-none icon-button p-2 text-zinc-600"><IconSearch /></button>
                        </div>
                    </div> */}
          
          <BlogSlider />

        </section>
    </>);
}