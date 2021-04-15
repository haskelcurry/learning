Ok here's the situation:

- You're waiting for the Backend to start working on the story
...Nothing special, right? But why should you wait for the BE?

Ok here's another one:

- You work on certain feature, but then realize that the BE doesn't function as you expected, and you need to rewrite your code

OR even:

- You and the BE dev work hard on a story, and then when it's almost finished, turns out that you both had different visions of the feature. The story is ruined

(next slide)
The reason? Documentation. You didn't document what you're GOING to do. Neither one of you guys KNEW what the other one is going to do. You did your work blindly, hoping that with just couple of tweaks it will work.

(next slide)
You know there's this approach:  let's code now, leave the documentation for the better times, "when we have time"
How well does it work? :D

We all know that documentation is good, we need to document our code, our API, everything, but still we don't do it! Why?

Well, we don't have time for that, right? We're Agile, we do SCRUM, we need to deliver features to make our clients happy, and move on!  right?!

(next slide)
So, this living organism which is our project, evolves and adapts to it's environment, but the documentation is not alive,  it's static,  it's text (meh) it does nothing...

Finally you have the time to document your code, but the moment you finish your documentation, somebody else changed your code already :D

(next slide)
So, how can we make the documentation ORGANIC? Is it even possible?

(next slide)
Well, first we need to have a slight mindshift.

(next slide)
Think of your current project. It has frontend, written in Angular. How did I guess? The title of this meeting says "for Angular developers" :D 
Ok, it has frontend written in Angular, and it has a backend written in Java or NodeJS or C++.  In between, there's an API: the contract between FE and BE, that defines WHAT YOUR APP REALLY DOES.
Think about it. Your FE can be replaced with any other FE, written in any other tech: React, Android, J2ME, anything that can make an HTTP call. Anything that can consume the BE API, would fit. 
Today VueJS is #1 technology, tomorrow it's long gone. Webcomponents, Flutter -- long gone.
No problem, API is same.
Actually, we can have multiple FEs that consume one BE API: desktop, mobile and uhh super mobile :D
So... your FE is abstract, replaceble. Unreal!

Now,  the BE could also be replaced -- and it happens quite often too -- on different tech stack: C++, miscroservices, serverless cloud something something. 
The BE makes sense only in terms of the API,  it's like the closed box with the control panel on top, which is the API. No control panel -- the box is useless.
No API -- the backend is a black box.

If a tree falls in a forest and no one is around to hear it, does it make a sound?
If a backend exists somewhere without the ability to reach out to it, does it make a sense?

So, the BE makes sense only in terms of the API.

And if the BE is replaced, as the API stays absolutely the same, you as a FE dev wouldn't care. 
You wouldn't even know about that!
So, the BE is also a ghost. Today Java is popular, tomorrow it's long gone.

So, FE is abstract, BE is abstract, but the API IS REAL.

That's why, your product is NOT FE. NOT BE. 
(next slide)
Your product in first place is the API: the contract that says what your app can do.

But, what is API?  It's an interface between FE and BE.
The problems that I mentioned in beginning were related to poor documentation of this interface. Quite often people don't document it at all!
But now with this new idea -- that the API is our main product -- see how the situation changes.


(next slide)
Here's sprint planning [...] 
Let's say I've been assigned to work on a story, as a FE dev. It has a BE dev assigned, too.
At certain point, we feel like we're ready to start.
(next slide)
First, we have a short 15 mins call first, a kickoff meeting, on which we discuss the API.
For example it's a list of users. The BE guy knows what the request should be, I know what I need to display on FE. So we sit and quickly document the API together.
This meeting is to think about the API in beforehand, together.
Remember that it's our main part of the product, so we treat it carefully. It should be:

(next slide)
  - Minimal
  - Optimal
  - Organized
  - Documented!
  - Testable

(next slide)
Once the API is documented, we move along in parallel!
    /-- BE -------\
   .--- FE --------.
    \-- Doc ------/
(next slide)
Of course sometimes the API gets adjusted and it's NORMAL. We're Agile, right? :)
BUT, when it changes, it changes explicitly. It's obvious for all the team that the API was changed. You can configure your CI to send a notification when it happens, and so on.
You can log additional time -- officially -- to adjust FE to meet the changes on BE side.
It's controlled now.  It's not a blind process anymore, thanks to documenting the API.
(next slide)
Aand we successfully finish the story.

Ok, but how to document an API?
Of course you could open your Notepad and go ahead and write it as plain text, but. 
There are actually common standardized ways to document the API definition.
Long story short, meet OpenAPI!
(there are other definition standards...)

Ok, enough of theory, let's move on to practice!

Let's have an example. I have a project here...

- generators
- mocking
- testing
- visualizing
- replacability
- mobility
- organic documentation

Is this organic? What does "organic" mean?
What do we actually MEAN when say "organic"?
It's when there are no separate "parts", but all structure grows simultaneously.
Take a human body as an example. It's not like our arm grows first, then brain, then legs, etc. It all develops simultaneously.
It's not like your project grows first, and then the documentation.
Stories in Agile methodology are also "growing simultaneously" of the product: BA, BE, FE, QA, CI... API DOC!
See, you WANT the API documentation to be a part of every story now, because it HELPS you.

I hear you saying "Yes, cool, but my project has SO HUGE API now... I'm gonna try that out on my next project... maybe".
Well the good news are that you can actually use it on your CURRENT project in no time, starting tomorrow.
There is no need to cover ALL existing API with the documentation right away -- this will be opposite to organic, right?
Just talk to your team, add the tools (I'll provide you a blueprint), and then do it for your next story, and every subsequent story. 
(show prism proxy)
If you need something from the API -- write a doc for it. Step by step. Don't force yourself.
And then you'll see that very quickly the project gets covered with bullet-proof API docs.
And perhaps also you'll start to notice obsolete places in your API, that could be cleaned up.
Well, and other subjects for improvement in your API.

Big enterprise projects would benefit from it the most. Because nobody remembers what the devs did 5 years ago and how to use it. But the small projects too! Just give it a try.

~ Questions ~
