const puppeteer = require('puppeteer');
const nock = require('nock');
const useNock = require('nock-puppeteer');
const mockData=[
  {
      "id": "81a885d6-8f68-5bc0-bbbc-1c7b32e4b4e4",
      "title": "Need a Little Help with Your Site? Hire a Corvid Web Developer",
      "content": "Here at Wix we strive to support you with this community forum, API references, articles, videos and code examples. But sometimes you might need a little extra help to get your site exactly the way you want it. \nHire a developer from the Wix Arena, an online marketplace with top Corvid web developers from around the world. Submit your project details here, and we’ll find the right professional for you.",
      "userEmail": "jug@nesetal.af",
      "creationTime": 1542111235544,
      "labels": [
          "Corvid",
          "Api"
      ],
      "done": true
  },
  {
      "id": "36043e94-6d21-5d2a-b1eb-f983996e3d79",
      "title": "Wix Code Forum - Guidelines for posting a question",
      "content": "Hi Wix Code community, me again :)\n\nOver the past few weeks, we've discussed ways to make forum questions more accurate, professional and easy to answer to. This is super important, as this helps us be an ever-growing community, where we help one another achieve any goal that comes to mind, regardless of their coding level.\n\nHere's what we came up with:\n\n- Be nice. We love the atmosphere, and we love seeing how much everyone enjoys helping one another. We firmly believe that we should safeguard this culture—this is our space and we should protect it. We have different skills and  different challenges, so don't forget that each one of us was once a code baby :)\n- Do not repeat questions. Use the forum search. There's a great chance that someone has already solved the problem that you are facing. \n- Use meaningful titles. ‘How can I create a collapsing and expanding repeater?’ is a much better title than ‘Help please!’. This makes it easier for people to spot the posts that they can help with.\n- Use Hashtags. makes it #easy #to #follow #topics.\n- Multiple short posts are better than a long one. This allows other people to benefit from our posts after we're done with it. Keeping posts short makes it easy to find answers, and makes the post relevant for more people.\n- Keep questions focused and clear. This will make each question easier to solve, which makes it possible for more people to answer it.\n- Format the text in your question. Use Code blocks, bullets, etc. to make it easier to understand.\n- Refrain from posting a long code. Debugging code is difficult enough when it's a short one. Post only relevant part of code.\n- Provide as many details as possible. Share what you think is right, what you’ve tried to do, and what blocks you. Include any relevant screenshots, code, and URLs to make it easier for others to understand the problem.\n- Acknowledge our peers’ help by marking a 'Top Comment' for the best answer. This will also make it easier to spot the correct answer.\n\n\nLast but not least: WORK HARD, PLAY HARDER!. Have fun in the process ;)\n\n",
      "userEmail": "kekikum@segtaj.gh",
      "creationTime": 1545880457898,
      "labels": [
          "Corvid",
          "Guidelines"
      ]
  },
  {
      "id": "ab6fc754-0e01-5cfb-84b9-cf37c1c0cdb5",
      "title": "Collapse/expand code affecting the page footer\n",
      "content": "I have placed collapse/expand code onto one of my pages, but the footer now has a huge white space above it in the preview. Is there a way to fix this?",
      "userEmail": "susjorna@jep.sa",
      "labels": [
          "Collapse",
          "Expand"
      ],
      "creationTime": 1517833093439
  },
  {
      "id": "82150d9f-f12c-5545-8329-6eaa80cb9ebd",
      "title": "How to Display Numbers with a Comma Separator",
      "content": "Hey Guys, \n\nStruggling with understanding how to get my code to display commas. While I know its been attempted to be answered before my situation is a bit unique I think. \n\nIn my my database I have both text and numbers (different columns). The numbers are inputted as 0000.00, but displayed with a comma within the database. When I tried to use this code: \n \n$w.onReady(function () {\n\n  $w(\"#dataset1\").onReady(() => {\n var number = Number($w(\"#table1\").text);\n    $w(\"#totalDealValue\").text = number.toLocaleString();\n\n  });\n\n});\n\nIt stated \"text does not exist for table1\" and \"totalDealValue is not a valid selector\"\n\nI'm not sure how to select a particular column within the dataset to display the information within the column with a comma. \n\nany help would be appreciated. Still learning to code!\n\nBest,\nGabe",
      "userEmail": "co@ac.na",
      "creationTime": 1514870853599
  },
  {
      "id": "b52ad1dc-937b-54c3-81e9-2d433dd96bf6",
      "title": "setting up my login page profile",
      "content": "Hi there!\n\nI just want to ask how to fix my problem regarding on my login page.\n\nI watched and followed a tutorial on how to make database and a login page, here's what I have done following the tutorial, I did not mean to say it is wrong but I think I lack of something that I cannot decode on myself and I have a hard time looking since I am not sure what it is.\n\nHere is what I did:\n\n* Database collection\n* A pagecontent where there is:\n\nFirst Name\nLast Name\nEmail\nUpload Profile\nAbout Me\n\nThis page is connected to my database which I did right\n\n* I made a dynamic page wherein it will show the content that I will write from the page content I mentioned above. If I will not write information on that page content, my dynamic page will be blank.\n\nAfter I created a database, a page and a dynamic page, I, then created the login/logout page using codes.\n\nMy concern is this, once I click on my profile, instead of going to my dynamic page, it should be on my page content. Once I put information on that page, then it will show my dynamic page.\nHow can I, or what should I do with that?\n\nThank you for the answers.\n",
      "userEmail": "cube@zo.lv",
      "creationTime": 1523581514366,
      "labels": [
          "Login",
          "Problem",
          "Tutorial"
      ]
  },
  {
      "id": "42c22972-8daa-5305-9885-659616df6e18",
      "title": "Corvid App Developers Alpha?",
      "content": "I could have sworn that I saw reference to a new system that was in alpha testing that would allow developers to add a module to their Corvid developers system that would let them save apps, pages and widgets to help move them between sites. Now, I can't find what I remember reading. Anyone know what I am referring to?",
      "userEmail": "ozipagren@ihu.jm",
      "creationTime": 1533526556410
  },
  {
      "id": "7091aeb2-cbf4-504f-8ce6-dee773212074",
      "title": "View Count & Click Count",
      "content": "Hey there,\n\nI have resorted to here, to see if someone can simply help me (it would be greatly appreciated if you could give me your help on this piece of code). I have been trying for a day now, with no luck to get this to work. \n\nI am building an advertising system, which displays adverts across my website. Mostly using repeaters - the ads are stores in an 'Adverts' database - where i can use tags to also control the placement. \n\nI need to be able to do the following:\n\nUpon an Advert being clicked within a repeater, update the Database item click count field which field key would be 'clicks'. \nUpon an Advert being viewed (scrolled over) update the Database item view count field which field key would be 'views'\nOR....update the 'view' count field based on a page being loaded with a repeater/repeater item being on it - if the above is more complex in some way.\n\nHope this makes sense and i would be really grateful for someone's help on this. Much appreciated.\n",
      "userEmail": "an@nagla.gh",
      "creationTime": 1535681533617,
      "labels": [
          "View Count"
      ]
  },
  {
      "id": "e35f54a8-8794-5d1e-915d-202138500e9b",
      "title": "Bold numbers in automated text",
      "content": "Hi, I have a site where when the user selects from multiple drop down menus they get a result. How can I make it so that the a and b values below are bolded?\n\nexport function text_a_b(a,b){\n var Amin = session.getItem(\"Amin\");\n var Bmax = session.getItem(\"Bmax\");\n    $w(\"#resA\").text = \"If you enroll by October, you are estimated to pay between $\" + a + \" and $\" + b + \" per month\"; \n\n}",
      "userEmail": "marfetlub@wopol.as",
      "creationTime": 1543752057872
  },
  {
      "id": "4a8e9c43-4acb-5e3b-b045-b5beb57f9e10",
      "title": "Invoke a delete confirmation lightbox from another lightbox",
      "content": "I have a lightbox that queries a collection and populates a table which is linked to a dataset. When a user selects a row in the table, I want to open a second lightbox \"Delete Verification\" asking the user to confirm deleting the item.  The user selects either a Yes button or a No button which closes the \"Delete Verification\" lightbox and sets a data variable called \"confirmed\" to a value of either \"yes\" or \"no\". \nThen, the first lightbox checks this return value and if \"yes\" it calls the dataset1.remove function.\n\nThe problem is the \"Delete Verification\" lightbox does not open. Here is the pertinent code.  Note: the \"Delete Verification\" lightbox is called from several pages and it works fine. It just doesn't open when called from this particular lightbox.\n\nexport function table1_rowSelect(event) {\n //delete the selected row\n let tableRowIndex = event.rowIndex;\n    console.log(\"tableRowIndex = \" + tableRowIndex); // 2 if the third row selected\n \n //ask user to confirm before deleting the item\n    $w(\"#dataset1\").setCurrentItemIndex(tableRowIndex) // sets the dataset rowIndex\n      .then( () => {\n        console.log(\"open the lightbox asking user to confirm deletion\");\n        (wixWindow.lightbox.open(\"Delete Verification\"))  //########## THIS LIGHTBOX DOES NOT OPEN #########\n             .then( (data) => {\n let userAction = data.confirmed;\n                 console.log(\"userAction = \" + userAction);\n if (userAction === \"yes\") {\n                    $w(\"#dataset1\").remove();\n                }\n             })\n \n      } );\n}\n\n",
      "userEmail": "di@modude.mc",
      "creationTime": 1543815282858
  },
  {
      "id": "7181cec4-cf43-5936-a75b-c1d5f8a7e00e",
      "title": "twilio resister otp not work",
      "content": "\nhi \ni'm newbie/beginer to buid webside\ni want to use sms authentication mobile number\nfor newuser register\n\nnow fucntion don't work\n\nplese help me fix this\n\nthank you\n\n(sorry for english)\n\n\n\n\n\n \n\n\n",
      "userEmail": "zorjubuw@us.mh",
      "creationTime": 1528964107501
  }]
/* test for the scroll button the */


describe('App Test', () => {
    test('scroll up button work', async () => {
      let browser = await puppeteer.launch({
      });
      let page = await browser.newPage();
      await page.goto('http://localhost:3000/');
         useNock(page, ['http://localhost:3000/api']);
      const getAllTicketsMock = await nock('http://localhost:3000/', { allowUnmocked: true })
      .get('/api/tickets')
      .query(() => true)
      .reply(200, mockData);
      await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' })
      await page.$$('.ticket');
     expect(getAllTicketsMock.isDone()).toBe(true)
      await page.evaluate(() => { //scrolling down
        window.scrollBy(0, window.innerHeight*3);
      });    
      const btn = await page.$("#scrollBtn") //check if the scroll up button became visible after scrolling down 
      await btn.click()
      const checker = document.body.scrollTop===0 //check if the page scrolled to the top
      expect(checker).toBe(true)
      browser.close();
    }, 76000);
  });