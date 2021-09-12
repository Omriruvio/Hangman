




var csvdata = 'A Bit Much,More than is reasonable; a bit too much\n' +
    'A Bite at The Cherry,A good opportunity that isn\'t available to everyone\n' +
    'A Busy Bee,"A busy, active person who moves quickly from task to task."\n' +
    'A Cat Has Nine Lives,Cats seem to get away with dangerous things\n' +
    'A Cat in Gloves Catches No Mice,You can\'t get what you need if you\'re too careful.\n' +
    'A Cat Nap,A short sleep during the day\n' +
    'A Cold Day In July,(Something that) will never happen\n' +
    'A Cold Fish,"Someone who is not often moved by emotions, who is regarded as being hard and unfeeling."\n' +
    'A Cut Above,Slightly better than\n' +
    'A Cut Below,Inferior to; somewhat lower in quality than\n' +
    'A Day Late And A Dollar Short,Too delayed and insignificant to have much effect\n' +
    'A Dog in The Manger,"A person who selfishly prevent others from using, enjoying or profiting from something even though he/ she cannot use or enjoy it himself."\n' +
    'A Few Sandwiches Short Of A Picnic,"Abnormally stupid, not really sane"\n' +
    'A Good Deal,"To a large extent, a lot"\n' +
    'A Great Deal,To a very large extent\n' +
    'A Guinea Pig,Someone who is part of an experiment or trial\n' +
    'A Hair\'s Breadth,A very small distance or amount\n' +
    'A Home Bird,Somebody who prefers to spend his social and free time at home.\n' +
    'A Hundred And Ten Percent,More than what seems to be the maximum\n' +
    'A Lame Duck,A person or enterprise (often a business) that is not a success and that has to be helped.\n' +
    'A Leg Up,"An advantage, a boost"\n' +
    'A Lemon,A vehicle that does not work properly\n' +
    'A Life Of Its Own,An indepdendent existence\n' +
    'A Little Bird Told Me,I don\'t wish to divulge where I got the information\n' +
    'A Little Bird Told Me,I got this information from a source I cannot reveal.\n' +
    '"A Little from Column A, a Little from Column B",A course of action drawing on several different ideas or possibilities\n' +
    'A Lone Wolf,Someone who is not very social with other people\n' +
    'A Lot on One\'s Plate,A lot to do\n' +
    'A Million and One,Very many\n' +
    'A Notch Above,Superior to; higher in quality\n' +
    'A Penny for Your Thoughts,What are you thinking?\n' +
    'A Penny Saved is A Penny Earned,Every small amount helps to build one\'s savings\n' +
    'A Picture Is Worth a Thousand Words,A visual presentation can communicate something very effectively\n' +
    'A Plum Job,An easy and pleasant job that also pays well\n' +
    'A Rare Bird,Somebody or something of a kind that one seldom sees.\n' +
    'A Scaredy-Cat,Someone who is excessively scared or afraid.\n' +
    'A Second Bite At The Cherry,A Second chance to do something\n' +
    'A Sight for Sore Eyes,Someone that you\'re pleased to see\n' +
    'A Sitting Duck,A person or object in a vulnerable position that is easy to attack or injure.\n' +
    'A Snowball\'s Chance in Hell,Little to no likelihood of occurrence or success\n' +
    'A Stitch in Time Saves Nine,"Fix something quickly, because if you don\'t, it will just get more difficult to fix"\n' +
    'A Stone\'s Throw,A very short distance\n' +
    'A Storm in a Teacup,Unnecessary anger or worry about an unimportant or trivial matter\n' +
    'A Tall Order,A difficult task\n' +
    'A Week Is A Long Time In _____,"In the field mentioned, the situation may change rapidly"\n' +
    'About Time,Far past the desired time\n' +
    'About To,"On the point of, occurring imminently"\n' +
    'Above And Beyond,More than is expected or required\n' +
    'Above Board,"Openly, without deceit. Honestly, reputably."\n' +
    'Above The Law,Exempt from the laws that apply to everyone else.\n' +
    'Above The Salt,Of high standing or honor\n' +
    'Above Water,Not in extreme difficulty. Especially said of finances\n' +
    'Accident Of Birth,Luck in something due to family good fortune\n' +
    'Accident Waiting To Happen,A dangerous way of setting up or organizing something\n' +
    'According To Hoyle,"Properly, in accordance with established procedures"\n' +
    'Ace In The Hole,A hidden advantage\n' +
    'Ace Up One\'s Sleeve,A surprise advantage of which others are not aware.\n' +
    'Acid Test,A crucial event that determines the worth of something\n' +
    'Acknowledge The Corn,"Admit to a mistake, especially a small one; point out one\'s own shortcomings, or another\'s"\n' +
    'Acquired Taste,Something one learns to appreciate only after trying it repeatedly\n' +
    'Across The Board,"In relation to all categories, for everyone"\n' +
    'Across The Pond,On or to the other side of the Atlantic Ocean.\n' +
    'Act High and Mighty,"Be arrogant, presume that one is better than others"\n' +
    'Act Of Congress,"Hard to get, said of authorization"\n' +
    'Act One\'s Age,"To be mature, not childish"\n' +
    'Actions Speak Louder Than Words,One\'s character and intentions are shown more accurately by one\'s actions than by one\'s words.\n' +
    'Achilles\' Heel,The weak point of an otherwise powerful person or organization\n' +
    'Add Fuel To The Fire,Worsen already existing tension\n' +
    'Add Insult To Injury,Compound a defeat with humiliation or mockery\n' +
    'Add Insult to Injury,Humiliate someone in addition to doing damage to him or her\n' +
    'After One\'s Own Heart,Similar in a pleasing way\n' +
    'After The Fact,Too late; after something is completed or finalized\n' +
    'After The Lord Mayor\'s Show (UK),Anticlimactic; occurring after something impressive\n' +
    'Against The Clock,Forced to hurry to meet a deadline\n' +
    'Against the Clock,In a very limited amount of time; with a shortage of time being the main problem\n' +
    'Against The Grain,Contrary to one\'s natural inclinations\n' +
    'Against The Run Of Play,A typical of the way a game has been going\n' +
    'Age Before Beauty,"Something said by a younger woman to an older one, for instance allowing her to pass through a doorway"\n' +
    'Agree To Disagree,Accept or set aside a disagreement\n' +
    'Agreement In Principle,"In a negotiation, an agreement in which not all details have been worked out"\n' +
    'Aha Moment,"Sudden realization, the point at which one suddenly understands something"\n' +
    'Ahead Of One\'s Time,Offering ideas not yet in general circulation; highly creative\n' +
    'Ahead Of The Curve,"Innovative, devising new ideas in advance of others"\n' +
    'Ahead Of The Curve,Offering ideas not yet in general circulation; highly creative\n' +
    'Ahead Of The Game,Making faster progress than anticipated; ahead of schedule\n' +
    'Air Rage,Angry behavior inside an airplane\n' +
    'Airy Fairy,"whimsical, nonsensical, impractical"\n' +
    'Albatross Around One\'s Neck,Something from one\'s past that acts as a hindrance\n' +
    'Alive and Kicking,In good health despite health problems\n' +
    'All Along,For the entire time something has been happening\n' +
    'All And Sundry,Everyone(separately) Each one.\n' +
    'All Bark And No Bite,Tending to make verbal threats but not deliver on them\n' +
    'All Bets Are Off,What seemed certain is now unclear\n' +
    'All Dressed Up And Nowhere To Go,Prepared (with clothing or otherwise) for an event that does not occur\n' +
    'All Ears,"Listening willingly, waiting for an explanation"\n' +
    'All Eyes And Ears,Attentive\n' +
    'All Eyes Are On,Watching alertly or attentively. Having prominent eyes. Everyone is paying attention to\n' +
    'All Fur Coat And No Knickers,"Superficially attractive, physically or otherwise"\n' +
    'All Hands on Deck,Everyone must help.\n' +
    'All Hat And No Cattle,"Pretentious, full of bluster"\n' +
    'All Hell Breaks Loose,The situation becomes chaotic.\n' +
    'All In A Day\'s Work,"That\'s what I\'m here for; although I have accomplished something, it is part of what I\'m expected to do"\n' +
    'All In Good Time,Eventually; at a more favorable time in the future. This phrase encourages one to be patient.\n' +
    'All in One Piece,Safely\n' +
    'All It\'s Cracked Up To Be,As good as claims or reputation would suggest\n' +
    'All Mouth And No Trousers,"Superficial, engaging in empty, boastful talk, but not of real substance"\n' +
    'All Over But The Shouting,Certain to end in a specific way\n' +
    'All Over Hell\'S Half Acre,All over the place; everywhere.\n' +
    'All Over The Board,"Everywhere, in many different locations"\n' +
    'All Over The Map,Everywhere; in many different locations\n' +
    'All Over The Place,Everywhere; in many different locations\n' +
    'All Rights Reserved,Said of a published work; all reproduction rights are asserted by the copyright holder\n' +
    'All Roads Lead to Rome,There is more than one effective way to do something; many different methods will produce the same result\n' +
    'All Set,"Ready, prepared, finished"\n' +
    'All Sizzle And No Steak,Failing to live up to advance promotion or reputation\n' +
    'All Talk and No Trousers,Prone to empty boasts\n' +
    'All Told,With everything taken into consideration\n' +
    'All That Jazz,"Similar things, similar qualities, et cetera"\n' +
    'All The Marbles,The entire prize or reward\n' +
    'All The Rage,Very fashionable\n' +
    'All the Rage,Very much in fashion\n' +
    'All The Same,Anyway; nevertheless; nonetheless.\n' +
    'All The Tea In China,"Great wealth, a large payment"\n' +
    'All Things Being Equal,In the event that all aspects of a situation remain the same\n' +
    'All Things Considered,Taking all factors into consideration\n' +
    'All Thumbs,Clumsy\n' +
    'All Very Well,True to a certain extent\n' +
    'All Wet,Completely mistaken\n' +
    'Along The Lines Of,"In general accordance with, in the same general direction as"\n' +
    'Amateur Hour,A display of incompetence\n' +
    'Amber Gambler,Someone who accelerates to try to cross an intersection before a traffic light turns red\n' +
    'Amber Nectar,Beer\n' +
    'American Dream (The),The belief among Americans that hard work leads to material success\n' +
    'An Apple a Day Keeps the Doctor Away,Eating healthy foods will keep one from getting sick (and needing to see a doctor)\n' +
    'An Axe,"To Grind A grievance, a disagreement with someone that justifies confrontation."\n' +
    'An Early Bird,"A person who gets up early in the morning, or who starts work earlier than others."\n' +
    'An Eye for an Eye,Justice in which reparation or vengeance exactly matches the harm caused to the victim\n' +
    'An Offer One Can\'t Refuse,An extremely attractive offer\n' +
    'Ancient History,"Something, such as a disagreement, that happened long ago and ought to be forgotten"\n' +
    'And All That,"Et cetera, and so on."\n' +
    'And Counting,And the number just mentioned is increasing (or decreasing)\n' +
    'And Change,And an additional amount of money that\'s less than the next round number\n' +
    'And His Mother,"An intensifier for an inclusive noun or phrase such as everyone, everybody"\n' +
    'And So Forth,"Indicates that a list continues in a similar manner, etc."\n' +
    'And So On,"Indicates that a list continues in a similar manner, etc."\n' +
    'And The Like,"And other similar items, etc."\n' +
    'And Then Some,And even more than what has just been mentioned\n' +
    'Another Nail In One\'s Coffin,"Something that leads to someone\'s death, literally or figuratively."\n' +
    'Answer Back,Respond impertinently; to talk back.\n' +
    'Ants In Your Pants,Restlessness\n' +
    'Any Port in a Storm,"If you\'re in trouble, you\'ll turn to anything that improves the situation."\n' +
    '"Any Tom, Dick or Harry",Any ordinary person\n' +
    'Angel\'s Advocate,Someone who takes a positive outlook on an idea or proposal\n' +
    'Angle For,"Aim toward something, try to obtain something, often indirectly or secretly"\n' +
    'Apple of One\'s Eye,"A favorite person or thing, a person especially valued by someone"\n' +
    'Apple of Someone\'s Eye,The person that someone loves most of all and is very proud of\n' +
    'Apples and Oranges,"Of two different classes, not comparable"\n' +
    'Apples and Oranges,"Of two different classes, not comparable"\n' +
    'Arm Candy,An attractive woman accompanying a powerful or famous man at a social event\n' +
    'Armed to the Teeth,Carrying many weapons\n' +
    'Around the Clock,At all times\n' +
    'As American as Apple Pie,Very or typically American\n' +
    'As Far as I Can Throw (someone),Only slightly\n' +
    'As Fit as A Fiddle,To be healthy and physically fit\n' +
    'As Pale as A Ghost,Extremely pale\n' +
    'As Pale as Death,Extremely pale\n' +
    'As Poor as a Church Mouse,Very poor\n' +
    'As Red as A Cherry,Very red\n' +
    'Asleep at the Wheel (Switch),not paying attention to one\'s work; not doing one\'s job diligently.\n' +
    'At Death\'s Door,Very near death\n' +
    'At Each Other\'s Throats,Constantly and strongly arguing\n' +
    'At Loggerheads,In a state of persistent disagreement\n' +
    'At Loggerheads,In a state of persistent disagreement.\n' +
    'At Sixes and Sevens,Someone is in a state of confusion or not very well organized.\n' +
    'At the Drop of a Hat,"Spontaneously, suddenly"\n' +
    'At the Eleventh Hour,It happens when it is almost too late.\n' +
    'At the End of One\'s Rope (Tether),Running out of endurance or patience\n' +
    'At the End of the Day,In the final analysis; when all is said and done\n' +
    'At Wit\'s End,Frustrated because all measures to deal with something have failed\n' +
    'Babe In Arms,A baby being carried\n' +
    'Babe In The Woods,"An innocent, naive person"\n' +
    'Babe Magnet,A man to whom women are attracted\n' +
    'Baby Blues,Blue eyes.\n' +
    'Baby Boomer,"A person born in the years following World War II, when there was a temporary marked increase in the birth rate"\n' +
    'Babysitter Test,"An evaluation of the ease of use of household appliances, especially remote control devices"\n' +
    'Back And Forth,"Dialogue, negotiations"\n' +
    'Back At You,Same to you (used to return a greeting or insult)\n' +
    'Back Burner (On The),Not urgent; set aside until later\n' +
    'Back Forty,"Remote, inaccessible land"\n' +
    'Back in the Day,"Formerly, when I was younger, in earlier times"\n' +
    'Back Of Beyond,A remote location\n' +
    'Back Office,Support services for a business\n' +
    'Back on One\'s Feet,Physically healthy again\n' +
    'Back to Square One,Back to the start\n' +
    'Back to Square One,Forced to begin something again\n' +
    'Back to the Drawing Board,Forced to begin something again\n' +
    'Back to the Salt Mine(s),We have to go back to work.\n' +
    'Back to the Salt Mines,It\'s time for me (us) to go back to work\n' +
    'Back the Wrong Horse,To support the losing side\n' +
    'Backing and Filling,Delaying a decision by making small changes or arguing about small details\n' +
    'Backseat Driver,A passenger in a car who gives unwanted advice to the driver is called a backseat driver.\n' +
    'Backseat Driver,"Someone who likes to give (often annoying) advice to the driver of a car, or the leader of some other enterprise"\n' +
    'Bad Apple,"A discontented, trouble making, or dishonest person"\n' +
    'Bad Blood,Enmity or hatred that stems from something in the past\n' +
    'Bad Egg,Someone who is not to be trusted\n' +
    'Bad Taste In One\'s Mouth,"Unease, a feeling that something unspecified is wrong in a situation"\n' +
    'Bag of Tricks,A set of methods or resources\n' +
    'Bail Out,"To rescue someone from a bad situation, to shield someone from the consequences of his or her actions"\n' +
    'Ball and Chain,1. One\'s spouse (derogatory but often affectionate); 2. an ongoing burden\n' +
    'Ballpark Figure,A rough estimate\n' +
    'Banner Year,A year marked by strong successes\n' +
    'Bang for Your Buck,Value for money\n' +
    'Bang for Your Buck,Value for your money\n' +
    'Bang One\'s Head Against the Wall (Against a Brick Wall),Try repeatedly to do something without making progress\n' +
    'Baptism by Fire,A difficult task given right after one has assumed new responsibilities\n' +
    'Bar Fly (or Barfly),Someone who spends much of his or her time in bars\n' +
    'Bare One\'s Heart (Soul),To confess one\'s deepest secrets\n' +
    'Bark Up the Wrong Tree,Pursue a mistaken approach or belief; be wrong in a course of action\n' +
    'Basket Case,So upset or stunned that one is unable to function; in a hopeless condition\n' +
    'Bat/Play for Both Teams,To be bisexual.\n' +
    'Bat/Play for the Other Team,To be homosexual.\n' +
    'Batten Down the Hatches,Prepare for a storm\n' +
    'Batten Down the Hatches,Prepare for a storm\n' +
    'Be A Barrel of Laughs,"To be fun, funny, and pleasant."\n' +
    'Be A Cold Day In Hell,(Something that) will never happen\n' +
    'Be An Item,Two people are an item when they are having a romantic relationship\n' +
    'Be Footloose and Fancy-Free,"To be free of responsibilities, including romantic commitments"\n' +
    'Be Head Over Heels (In love),Be in love with somebody very much\n' +
    'Be in Seventh Heaven,Extremely happy\n' +
    'Be in Two Minds (about something),"To not be certain about something, or to have difficulty in making a decision"\n' +
    'Be Like Chalk and Cheese,Things or people who are very different and have nothing in common\n' +
    'Be Lovey – Dovey,Expressing your love in public by constantly kissing and hugging\n' +
    'Be on the Mend,Be improving after an illness\n' +
    'Be Snowed Under,Be extremely busy with work or things to do\n' +
    'Bean Counters,"Accountants, finance professionals in an organization"\n' +
    'Bean Counters,"Accountants, finance professionals in an organization"\n' +
    'Beat Around the Bush,To speak in a roundabout way in order to avoid confronting an unpleasant topic\n' +
    'Beat Someone To The Draw,To accomplish or obtain something more quickly than someone else\n' +
    'Beat Someone to the Punch,Do something before or faster than someone else\n' +
    'Beat the Drum for (Something),Speak in favor of something to try to generate support\n' +
    'Beauty Is Only Skin Deep,External appearance is a superficial basis for judging someone\n' +
    'Bed of Roses,A comfortable situation\n' +
    'Bedroom Eyes,An expression of the eyes that seems to invite sex\n' +
    'Bee in One\'s Bonnet,Someone who has a bee in their bonnet has an idea which constantly occupies their thoughts.\n' +
    'Beggar Thy Neighbor,To do something beneficial for oneself without worrying about how it affects others\n' +
    'Behind the Eight (or 8) Ball,At a serious disadvantage\n' +
    'Behind the Scenes,In a way not apparent to the public\n' +
    'Behind the Times,Old-fashioned\n' +
    'Bell the Cat,Take on a difficult or impossible task\n' +
    'Bells And Whistles,Attractive but unnecessary features of a product\n' +
    'Belly Laugh,"Loud, hearty laughter"\n' +
    'Bend an Elbow,Drink alcoholic beverages at a tavern\n' +
    'Best (Greatest) Thing Since Sliced Bread,An innovative development\n' +
    'Best of Both Worlds,Combining two qualities that are usually separate\n' +
    'Bet One\'s Bottom Dollar (On Something),Be certain that something will happen\n' +
    'Bet the Farm,Risk everything; spend all one\'s money on something in hopes of success\n' +
    'Better late Than Never,It implies that a belated achievement is better than not reaching a goal at all.\n' +
    'Between a Rock and a Hard Place,Caught between two undesirable options\n' +
    'Between the Devil and the Deep Blue Sea,In a difficult position\n' +
    'Beyond the Pale,Too morally or socially extreme to accept\n' +
    'Beyond the Shadow of a Doubt,Absolutely certain\n' +
    'Big Apple,An informal name for New York City\n' +
    'Big Brother,"Government, viewed as an intrusive force in the lives of citizens; government spying"\n' +
    'Big Cheese,An important person in a company or organization\n' +
    'Big Deal,An important event or accomplishment\n' +
    'Big Fish,An important person\n' +
    'Big Picture,A wide perspective; a broad view of something\n' +
    'Big time,"If you do something big time, you do it to a great degree."\n' +
    'Birds of a Feather,"People having similar characters, backgrounds, interests, or beliefs."\n' +
    'Bird\'s-Eye View,A view from above; a broad perspective on something\n' +
    'Bite Off More Than You Can Chew,Try to do more than one is capable of doing\n' +
    'Bite the Bullet,"To do something even though it involves pain, discomfort, or difficulty"\n' +
    'Bite the Hand That Feeds You,Act badly toward someone who has helped you\n' +
    'Bitter Pill to Swallow,An unpleasant fact that one must accept\n' +
    'Black and White,"A clear distinction between good and bad, positive and negative"\n' +
    'Black Eye,A mark of shame\n' +
    'Black Sheep,"A person who does not fit into a group, especially a family"\n' +
    'Black-and-Blue,"Bruised, showing signs of having been physically harmed"\n' +
    'Blank Check,Permission to spend or do whatever one wishes; carte blanche\n' +
    'Blind Date,When two people who have never seen each other before go on a date\n' +
    'Blinded by Love,When a person is so madly in love with somebody that they can\'t see the person\'s faults or negative characteristics\n' +
    'Blood and Thunder,"A dramatic, spectacular performance"\n' +
    'Blow Away the Cobwebs,"If something blows away the cobwebs, it makes you feel more lively and refreshes your ideas."\n' +
    'Blow Hot and Cold,Shift one\'s level of enthusiasm repeatedly\n' +
    'Blow Off Steam,To express anger and frustration in a way that does no damage\n' +
    'Blow One\'s Top,Lose one\'s temper\n' +
    'Blow One\'s Stack,To lose one\'s temper and explode in anger\n' +
    'Blow the Cobwebs Away (or Out of Something),"Make space for fresh ideas, encourage something new"\n' +
    'Blow the Whistle,Reporting an illegal or unacceptable activity to the authorities\n' +
    'Blow Up,Explode\n' +
    'Blow Your Own Trumpet,Brag; emphasize one\'s own contributions\n' +
    'Blue Blood (adj. blue-blooded),Person of aristocratic background\n' +
    'Blue Eyed Boy,A person who is a favorite of those in authority; someone whose mistakes are forgiven\n' +
    'Blue Light Special,1. a temporary sale at a discount store. 2. a traffic stop by the police.\n' +
    'Bob\'s Your Uncle,The rest is easy; you\'re almost finished\n' +
    'Bolt From the Blue,Something completely unexpected\n' +
    'Bone Dry,"Completely dry, totally without moisture"\n' +
    'Born on The Wrong Side of the Blanket,Born to parents who were not married\n' +
    'Borrow Trouble,"Take needless risks, invite problems"\n' +
    'Bottom of the Barrel,Low-quality choices\n' +
    'Boy Toy,"A young man who is the lover of an older, often wealthier woman (see toyboy)"\n' +
    'Boys will be Boys,A phrase of resignation used when boys get into trouble or are stereotypically reckless or rowdy\n' +
    'Brainstorm,To generate many ideas quickly\n' +
    'Break a Leg,"Good luck! This is used for a stage performer-or for anyone else who is about to give some kind of a performance, such as an important speech"\n' +
    'Break Out in A Cold Sweat,To perspire from fever or anxiety\n' +
    'Break the Bank,Exhaust one\'s financial resources\n' +
    'Break The Ice,"To get something started, particularly by means of a social introduction or conversation"\n' +
    'Break up/ Split up (With Somebody),End the relationship\n' +
    'Bring Home the Bacon,Earn money for one\'s family\n' +
    'Bringing a Knife to a Gunfight,Underequipped or unprepared\n' +
    'Brush Under the Carpet,Attempt to temporarily conceal a problem or error\n' +
    'Bucket List,Things you want to see or do before you die\n' +
    'Bull in a China Shop,A clumsy or tactless person\n' +
    'Bump in the Road,"A temporary problem, a small setback"\n' +
    'Bundle Up,Put on lots of warm clothing\n' +
    'Burn One\'s Bridges,Leave a job or a relationship on such bad terms that one does not stay in contact\n' +
    'Burn the Candle at Both Ends,"To work too hard, with possible bad consequences for one\'s health"\n' +
    'Burn the Candle at Both Ends,Work very long hours\n' +
    'Burn the Midnight Oil,To work late into the night\n' +
    'Burn the Midnight Oil,Working late into the night\n' +
    'Bury (Hide) One\'s Head In the Sand,"Ignoring something that\'s obviously wrong, not facing reality"\n' +
    'Bury the Hatchet,"Make peace, agree to end a dispute"\n' +
    'Business as Usual,"A normal situation (whether related to business or not), typically restored after some change"\n' +
    'Busman\'s Holiday (UK),A working vacation\n' +
    'Busman\'s Holiday,"A vacation where you do the same thing you do at work, a working vacation"\n' +
    'Busted Flush,"A failure, someone or something that seemed promising but did not develop well"\n' +
    'Butter Wouldn\'t Melt in (Someone\'s),"Mouth This person is cool in manner, prim and proper"\n' +
    'Buy a Pig in a Poke,To buy something with no prior inspection\n' +
    'Buy Time,Cause a delay in something with the aim of improving one\'s position\n' +
    'By a Whisker,By a very short distance\n' +
    'By All Means,"Of course, certainly"\n' +
    'By Hook or by Crook,By some possibly dishonest means\n' +
    'By the Skin of One\'s Teeth,Barely escaping disaster\n' +
    'By Word of Mouth,Via personal communications rather than written media\n' +
    'Call a Spade a Spade,To speak frankly and directly about a problem\n' +
    'Call It a Day,Decide that one has worked enough on something for the day\n' +
    'Call It a Night,End an evening\'s activities and go home\n' +
    'Call the Shots,Make the important decisions in an organization\n' +
    'Call the Tune,Making important decisions and controlling a situation.\n' +
    'Can\'t See the Forest for the Trees,Is unable to maintain a wider perspective\n' +
    'Can\'t Swing A Dead Cat In (Place),Without Hitting A (Thing) There are many examples of [thing] in this [place].\n' +
    'Carrot-and-Stick (Approach),"A tactic in which rewards are offered, but there is also the threat of punishment"\n' +
    'Carry a Torch (for),To continue to be in love with someone even after a relationship has ended\n' +
    'Carry Coals To Newcastle,Supply something that is unneeded; engage in useless labor\n' +
    'Carry the Can,To take the blame for something one did not do\n' +
    'Cash In One\'s Chips,1. To take advantage of a quick profit 2. To die\n' +
    'Cash-Strapped,In need of money\n' +
    'Cast the First Stone,To be the first to criticize or attack someone\n' +
    'Castle in the Air,An impractical plan\n' +
    'Cat Fight,A fight between two women\n' +
    'Cat Got Your Tongue?,Don\'t you have anything to say?\n' +
    'Cat on a hot tin roof,Be extremely nervous\n' +
    'Cat-and-Mouse (adj.),In a toying way; playful in an unpleasant way\n' +
    'Catch One\'s Death of Cold,To become very ill (with a cold/flu etc.)\n' +
    'Catch Some Rays,To sit or lie outside in the sun\n' +
    'Catch Someone\'s Eye,Attract someone\'s attention\n' +
    'Catch-22,A difficult situation from which there is no escape because options for avoiding it involve contradictions\n' +
    'Cat\'s Paw,"A person being used by someone else, a tool"\n' +
    'Caught Red-Handed,Apprehended while committing a crime\n' +
    'Circle the Wagons,"To prepare as a group to defend against attack, adopt a defensive posture"\n' +
    'Claim to Fame,Unusual feature or offering\n' +
    'Clean Up Nicely,Look good when one is dressed up. Usually said of women\n' +
    'Clear the Air,"Defuse tension, be honest about conflict so as to reduce it"\n' +
    'Clip Someone\'s Wings,Reduce someone\'s privileges or freedom\n' +
    '"Close, But No Cigar",You are very close but not quite correct.\n' +
    'Cock and Bull Story,"A far-fetched story, probably untrue"\n' +
    'Cock-A-Hoop,"Elated, excited"\n' +
    'Cold Day in Hell,A condition for something that would be extremely unlikely to occur\n' +
    'Come By Something Honestly,"Acquire something honestly, or inherit it"\n' +
    'Come Clean,To confess; to admit to wrongdoing\n' +
    'Come Hell or High Water,No matter what happens\n' +
    'Come Out in the Wash,To be resolved with no lasting negative effect\n' +
    'Come Out of the Closet,"Reveal a secret about oneself, usually that one is gay (homosexual)"\n' +
    'Come Out Swinging,Respond to something very aggressively\n' +
    'Come Rain and Shine,"Do regularly, whatever the circumstances"\n' +
    'Come to Grips With,To acknowledge a problem as a prelude to dealing with it\n' +
    'Come to Terms With (Something),Feel acceptance toward something bad that has happened\n' +
    'Coming Down the Pike,Likely to occur in the near future\n' +
    'Cook Someone\'s Goose,"To insure someone\'s defeat, to frustrate someone\'s plans"\n' +
    'Cook Up a Storm,Cook a great deal of food\n' +
    'Cooking Up a Storm,Cooking a great deal of food\n' +
    'Cool as A Cucumber,Calm and composed even in difficult or frustrating situations; self-possessed\n' +
    'Cool Cat,"Someone who has the respect of their peers in a young, casual way."\n' +
    'Cool Your Heels,Wait\n' +
    'Couch Potato,A lazy person who watches a great deal of television\n' +
    'Crash a Party,To attend a party without being invited\n' +
    'Crickets,Silence\n' +
    'Cross to Bear,"A problem one must deal with over a long time, a heavy burden"\n' +
    'Crunch Time,A period of high pressure when one has to work hard to finish something\n' +
    'Crunch the Numbers,Do calculations before making a decision or prediction\n' +
    'Cry Over Spilt (USA,Spilled)\n' +
    'Cry Wolf (verb),"To issue a false alarm, to ask for help when none is needed"\n' +
    'Cry Your Eyes Out,Cry hard for a very long time\n' +
    'Cry Your Eyes Out,Cry hard for a very long time\n' +
    'Curiosity Killed The Cat,"Stop asking questions, don\'t be too curious"\n' +
    'Cut (Someone) To the Quick,To deeply hurt someone emotionally\n' +
    'Cut Corners,Economize by reducing quality; take shortcuts\n' +
    'Cut It Fine,To do something at the last moment\n' +
    'Cut Off Your Nose to Spite Your Face,To act in a proud way that ultimately damages your own cause\n' +
    'Cut Someone Some Slack,Avoid treating someone strictly or severely\n' +
    'Cut to the Chase,Get to the point; explain the most important part of something quickly; skip the preliminaries\n' +
    'Cut the Gordian Knot,To solve a complex problem in a simple way\n' +
    'Cut the Mustard,Do something adequately\n' +
    'Cut Your Teeth on Something,To learn basic skills in a field\n' +
    'Cutting-Edge,"Very novel, innovative"\n' +
    'Champagne taste on a beer budget,Expensive or extravagant tastes or preferences that are beyond one\'s economic means.\n' +
    'Change Horses in Midstream,Change plans or leaders in the middle of a process\n' +
    'Change of Heart,A change in one\'s opinion or outlook\n' +
    'Change One\'s Tune,To alter one\'s opinion about something.\n' +
    'Changing of the Guard,A change in leadership at an organization\n' +
    'Chase Rainbows,To pursue unrealistic goals\n' +
    'Cheap Shot,An unfair attack; a statement that unfairly attacks someone\'s weakness\n' +
    'Cherry-Pick,To present evidence selectively to one\'s own advantage\n' +
    'Cherry-Pick,To select the best or most desirable\n' +
    'Chew the Fat,Chat for a considerable length of time\n' +
    'Chickens Come Home To Roost,The negative consequences of previous actions reveal themselves\n' +
    'Child\'s Play,A very easy task\n' +
    'Chill Out,Do something that helps them to calm down and relax for a while.\n' +
    'Chin Music,Meaningless talk\n' +
    'Chin Up/ Keep Your Chin Up,Cheer up; try to be cheerful and strong\n' +
    'Chip off the Old Block,"Someone who resembles a direct ancestor, usually the father"\n' +
    'Chomp (Champ) at the Bit,Be eager to do something\n' +
    'Chomp at the Bit,To be eager to do something\n' +
    'Chop Chop,"Quickly, without delay"\n' +
    'Chop Shop,A shop where stolen cars are disassembled for parts\n' +
    'Chuck a Wobbly,To act in an emotional way\n' +
    'Da Man (Slang),An accomplished or skillful person. Generally used in the compliment “”You da man!””\n' +
    'Dance to Someone\'s Tune,Consistently follow someone\'s directions or influence\n' +
    'Dance with the Devil,Knowingly do something immoral\n' +
    'Dark Horse,"A surprise candidate or competitor, especially one who comes from behind to make a strong showing"\n' +
    'Darken Someone\'s Door (Step),Make an unwanted visit to someone\'s home\n' +
    'Dead Ahead,"Directly ahead, either in a literal or a figurative sense"\n' +
    'Dead as the Dodo,Completely extinct; totally gone\n' +
    'Dead Eye,"A good shooter, a good marksman"\n' +
    'Dead Heat,An exact tie in a race or competition\n' +
    'Dead of Winter,"The coldest, darkest part of winter"\n' +
    'Dead ringer,Very similar in appearance\n' +
    'Dead Run,Running as fast as possible\n' +
    'Dead Shot,"A good shooter, a good marksman"\n' +
    'Deep Pockets,"The new owner has deep pockets, so fans are hoping the football team will improve next year with new players"\n' +
    'Deliver the Goods,Provide what is expected\n' +
    'Devil\'s Advocate,"Someone who argues a point not out of conviction, but in order to air various points of view"\n' +
    'Dirty Look,A facial manner that signifies disapproval\n' +
    'Do 12-Ounce Curls,Drink beer\n' +
    'Dodge a Bullet,To narrowly escape disaster\n' +
    'Doesn\'t Amount to a Hill of Beans,"Is unimportant, is negligible"\n' +
    'Dog Days of the Summer,The hottest day of summer\n' +
    'Dog in the Manger,"A person who prevents others from using something, even though the person himself or herself does not want it"\n' +
    'Dog-and-Pony Show,"A flashy presentation, often in a marketing context"\n' +
    'Dog-Eat-Dog,Intensely competitive\n' +
    'Don\'t Judge a Book by Its Cover,Don\'t be deceived by looks; don\'t rely on looks when judging someone or something\n' +
    'Don\'t Cry Over Spilled Milk,Don\'t worry about minor things.\n' +
    'Don\'t Look a Gift Horse in the Mouth,Do not question the value of a gift. The expression comes from the practice of determining the age and health of a horse by looking at its teeth.\n' +
    'Double-Dip,Improperly get income from two different sources\n' +
    'Double-Edged Sword,Something that can be helpful or harmful; something beneficial that also has a downside\n' +
    'Down in the Dumps,"Depressed, sad"\n' +
    'Down the Road,In the future (in your lifetime)\n' +
    'Drag One\'s Feet (or Heels),To do something reluctantly and slowly\n' +
    'Drag Your Feet,Do something very reluctantly; delay doing something\n' +
    'Drain the Lizard,Urinate\n' +
    'Draw a Blank,Be unable to remember something\n' +
    'Draw a Line in the Sand,Issue an ultimatum; specify an absolute limit in a conflict\n' +
    'Draw a Line Under (Something),To conclude something and move on to something else\n' +
    'Draw a Long Bow,"Exaggerate, lie"\n' +
    'Draw the Line,To set a limit to what one will accept\n' +
    'Dressed Up to the Nines,Someone is wearing very smart or glamorous clothes\n' +
    'Drink the Kool-Aid,"Accept a set of ideas uncritically, often dangerous ones"\n' +
    'Drive a Hard Bargain,To arrange a transaction so that it benefits oneself.\n' +
    'Drive a Hard Bargain,To negotiate effectively\n' +
    'Drive a Wedge Between,Try to split factions of a united group by introducing an issue on which they disagree\n' +
    'Drive Someone Up the Wall,Deeply irritate someone\n' +
    'Drop a Line,To write a letter or send an email\n' +
    'Drop the Ball,Fail to fulfill one\'s responsibilities; make a mistake\n' +
    'Dry Run,A practice execution of a procedure\n' +
    'Dutch Courage,Alcohol drunk with the intention of working up the nerve to do something\n' +
    'Dutch Uncle,A highly critical person\n' +
    'Dyed-In-The-Wool (adj.),Consistent in an affiliation or opinion over a long period; inveterate\n' +
    'Eager beaver,"The term eager beaver refers to a person who is hardworking and enthusiastic, sometimes considered overzealous."\n' +
    'Eagle-Eyed,Having sharp vision\n' +
    'Early Bird [noun or adjective],"Someone who does something prior to the usual time, or someone who gets up early."\n' +
    'Eat Crow,"To admit one was wrong, and accept humiliation"\n' +
    'Eat Humble Pie,"To admit defeat or error, to accept humiliation"\n' +
    'Eat Someone\'s Lunch,Defeat someone thoroughly\n' +
    'Eat Your Heart Out!,"(excl.) Go ahead, be jealous."\n' +
    'Eighty-Six (v.),"1) Discard, eliminate. 2) Throw someone out of a bar or store."\n' +
    'Elephant in the Room,A major problem that no one is talking about\n' +
    'Elevator Music,Pleasant but boring recorded music that is played in public places.\n' +
    'Elevator Pitch,"A brief presentation of an idea, one short enough to be delivered in an elevator"\n' +
    'Eleventh Hour,The last minute\n' +
    'Even Steven,Owing nothing; tied (in a game)\n' +
    'Every Dog Has His (Its),"Day Everyone has a moment of fame, power, or influence"\n' +
    'Every Man and His Dog,Many people\n' +
    'Every Man for Himself,Pursue your own interests; don\'t expect help from others.\n' +
    'Excused Boots,Allowed to avoid mandatory tasks\n' +
    'Face the Music,Dealing with consequences of one\'s actions\n' +
    'Face the Music,To accept judgment or punishment\n' +
    'Fall for Something,"Hook, Line, and Sinker To be completely deceived"\n' +
    'Fall in Love with Somebody,Start feeling love towards somebody\n' +
    'Fall Off the Wagon,To begin using alcohol (or another problem substance) after quitting\n' +
    'Fall on One\'s Sword,To accept blame; to sacrifice oneself\n' +
    'Fall Prey to,Be victimized by; be harmed by; be vulnerable to\n' +
    'Fancy Someone (British English),To find someone very attractive\n' +
    'Farther (On) Down the Road,"Later, at some unspecified time"\n' +
    'Farther (On) Down the Road,"Later, at some unspecified time"\n' +
    'Fashion-Forward,Tending to adopt new styles quickly\n' +
    'Fat Cat,"A highly placed, well-paid executive"\n' +
    'Father Figure,"A mentor, a person who offers guidance"\n' +
    'Feast Your Eyes On,To take great pleasure in looking at someone or something\n' +
    'Feather in One\'s Cap,An achievement for which one is recognized; a noteworthy achievement\n' +
    'Feather One\'s (Own) Nest,Use one\'s influence or power improperly for financial gain\n' +
    'Feather One\'s Nest,To take advantage of one\'s position to benefit oneself\n' +
    'Fed Up With,Refusing to tolerate something any further; out of patience\n' +
    'Feel Like a Million Dollars,"To feel great, to feel well and healthy."\n' +
    'Feel On Top of The World,To feel very healthy\n' +
    'Fell off a Truck,Probably stolen or illicitly obtained; said of something offered for sale to avoid discussing its origins\n' +
    'Fell off the Back of a Lorry,Probably stolen or illicitly obtained; said of something offered for sale to avoid discussing its origins\n' +
    'Fifteen Minutes of Fame,Temporary renown\n' +
    'Fifth Wheel,A superfluous person\n' +
    'Fight Fire with Fire,"Use the same measures that are being used against you, even if they\'re stronger than you would usually use"\n' +
    'Fight Like Cat and Dog,Continually arguing with each other\n' +
    'Find One\'s Voice,Become more confident in expressing oneself\n' +
    'Find Your Feet,To adjust to a new place or situation\n' +
    'Finger-Pointing,Blame; a situation within a group where each member attempts to blame others\n' +
    'Finger-Pointing,Blame; a situation within a group where each member attempts to blame others\n' +
    'Fire in the Belly,strong ambition\n' +
    '"First In, Best Dressed",The first people to do something will have an advantage\n' +
    'Fish for Compliments,Try to manipulate people into praising you\n' +
    'Fish or Cut Bait (usually an exclamation),Make a decision or give someone else a chance\n' +
    'Fish Out of Water,"A person who is in unfamiliar, confusing surroundings"\n' +
    'Five-Finger Discount,Shoplifting\n' +
    'Flash in the Pan,"A one-time occurrence, not a permanent phenomenon"\n' +
    'Flat Broke,Having no money at all\n' +
    'Flat Out Like a Lizard,Drinking Very busy\n' +
    'Flesh and Blood,"Blood relatives, close relatives"\n' +
    'Flew the Coop,"Left, escaped"\n' +
    'Flip-Flop (v. or n.),"To vacillate between two choices, to be indecisive"\n' +
    'Fly by the Seat of One\'s Pants,"To improvise, to make decisions without planning or preparation"\n' +
    'Fly High,"Be very successful, especially temporarily"\n' +
    'Fly Off The Handle,Lose one\'s temper suddenly and unexpectedly\n' +
    'Fly off the Handle,To become suddenly enraged\n' +
    'Follow In Someone\'s Footsteps (Tracks),Follow the example laid down by someone else; supplant\n' +
    'Follow Your Heart,Rely on one\'s deeper feelings and instincts when making a decision\n' +
    'Food for Thought,Something that makes you think carefully\n' +
    'For a Song,At very low cost\n' +
    'For a Song,At very low cost\n' +
    'For Crying Out Loud (excl.),An expression of extreme annoyance\n' +
    'For Xyz Reasons,"For multiple reasons, not worth specifying individually"\n' +
    'Foul Play,"Crime, typically murder"\n' +
    'Fourth Estate,The media and newspapers\n' +
    'Fox in the Henhouse (Chickenhouse),Someone who causes trouble\n' +
    'Freak Out,A wildly irrational reaction or spell of behavior\n' +
    'French Leave,Absence without permission\n' +
    'Freudian Slip,Accidental use of an incorrect word; a revealing slip of the tongue\n' +
    'From Pillar to Post,"From one place to another, in a forced, random way"\n' +
    'From Scratch,"From individual ingredients, not using a prepared mix"\n' +
    'From Soup to Nuts,Everything; from beginning to end\n' +
    'From the Bottom of One\'s Heart,Sincerely and with deep feeling\n' +
    'FUBAR,"Hopelessly ruined, not working, messed up."\n' +
    'Fu** (Or Screw) The Dog (Pooch),To make an embarrassing error\n' +
    'Full Fathom Five,Lost deep in the sea\n' +
    'Full of the Joys of Spring,"Very happy, enthusiastic and full of energy"\n' +
    'Game of Chicken,A conflict situation in which neither side will back down for fear of seeming cowardly (chicken)\n' +
    'Get A Charley Horse,To develop a cramp in the arm or the leg\n' +
    'Get A Word In Edgewise,Be able to say something while someone else is talking a lot\n' +
    'Get Along (with Someone),To have a satisfactory relationship\n' +
    'Get Bent Out of Shape,"Become angry, upset"\n' +
    'Get Carried Away,Become overly enthusiastic\n' +
    'Get In on the Ground Floor,Invest in or join something while it is still small\n' +
    'Get in Shape,Undertake a program of physical conditioning; exercise regularly\n' +
    'Get Off Scot Free,Be accused of wrongdoing but pay no penalty at all\n' +
    'Get Off Scot Free,Be accused of wrongdoing but pay no penalty at all\n' +
    'Get One\'s Ducks in a Row,Have everything organized; get oneself organized\n' +
    'Get One\'s Hands Dirty,To do the unpleasant parts of a job\n' +
    'Get Someone\'s Goat,To irritate someone deeply\n' +
    'Get To Grips With,To begin to understand and deal with something\n' +
    'Get the Ball Rolling,Do something to begin a process\n' +
    'Get the Picture,Understand what\'s happening\n' +
    'Get the Runaround,Be given an unclear or evasive answer to a question\n' +
    '"Get the Sack, Be Sacked",To be fired\n' +
    'Get the Third Degree,To be questioned in great detail about something\n' +
    'Get Wind of,Hear about\n' +
    'Get With the Program,"Figure out what everyone else already knows. Often used sarcastically, as a command"\n' +
    'Go Along (With),"Agree to something, often provisionally"\n' +
    'Go Ape,Express wild excitement or anger\n' +
    'Go Ballistic,Fly into a rage\n' +
    'Go Bananas,To become irrational or crazy\n' +
    'Go Bananas,To become irrational or crazy\n' +
    'Go Belly Up,To go bankrupt\n' +
    'Go Berserk,To go crazy\n' +
    'Go Bonkers,"To be or become wild, restless, irrational, or crazy; to act in such a way"\n' +
    'Go Cold Turkey,"Stop using an addictive substance suddenly, without tapering off"\n' +
    'Go Down in Flames,Fail in a spectacular way\n' +
    'Go Mental,To suddenly become extremely angry\n' +
    'Go Nuclear,Use an extreme measure; because extremely angry\n' +
    'Go Nuts,To become crazy\n' +
    'Go Off Half-Cocked,"To say or something prematurely, with a negative effect"\n' +
    'Go Off the Deep End,"To unexpectedly become very angry, especially without a good reason"\n' +
    'Go Off The Rails,"To go wrong, to begin acting strangely or badly"\n' +
    'Go Out on a Limb,Assert something that may not be true; put oneself in a vulnerable position\n' +
    'Go Pear-Shaped,To fail; to go wrong\n' +
    'Go See a Man About a Dog,Go to the bathroom (said as a euphemism)\n' +
    'Go to the Dogs,"To become disordered, to decay"\n' +
    'Go to the Mattresses,To go to into battle\n' +
    'Go the Extra Mile,Put forth greater-than-expected effort\n' +
    'Go Under the Knife,Undergo surgery\n' +
    'Go Viral,Begin To spread rapidly on the Internet\n' +
    'Go with the Flow,To accept the way things naturally seem to be going\n' +
    'Grab (Take) the Bull by the Horns,To begin forthrightly to deal with a problem\n' +
    'Grasp (Grab) at Straws,To take desperate actions with little hope of success\n' +
    'Grease Monkey,"A mechanic, especially an auto mechanic"\n' +
    'Grease the Wheels,Do something to make an operation run smoothly\n' +
    'Greasy Spoon,An inexpensive restaurant that fries foods on a grill\n' +
    'Green Around the Gills,To look sick\n' +
    'Green as Grass,"Lacking training, naive; often said of young people in new jobs"\n' +
    'Grind One\'s Teeth,Be very annoyed or angry about something without being able to say anything about it.\n' +
    'Guilty Pleasure,"Enjoying something which is not generally held in high regard, while at the same time feeling a bit guilty about it, is called a guilty pleasure."\n' +
    'Guinea Pig,"A test subject, a person who is used as a test to see if something will work"\n' +
    'Give and Take,"Negotiations, the process of compromise"\n' +
    'Give \'em Hell (often excl.),Express something passionately to a group\n' +
    'Give Lip Service to,Talk about supporting something without taking any concrete action\n' +
    'Give Lip Service,to Talk about supporting something without taking any concrete action\n' +
    'Give One\'s Two Cents (That\'s My Two Cents),"Offer an opinion, suggest something"\n' +
    'Give Someone a Holler,Contact someone\n' +
    'Give Someone a Piece of Your Mind,Angrily tell someone what you think\n' +
    'Give Someone a Run for Their Money,Compete effectively with the leader in a particular field\n' +
    'Give Someone an Earful,angrily express an opinion to someone\n' +
    'Give Someone the Cold Shoulder,"act hostile toward someone; to ignore, snub"\n' +
    'Give Someone The Old Heave-Ho,"Fire someone, remove someone from a group or team"\n' +
    'Give Something a Whirl,Attempt something without being totally familiar with it\n' +
    'Give the Green Light,Approve something; allow something to proceed\n' +
    'Hail Mary (n. or adj.),"A desperate, last-ditch attempt"\n' +
    'Hair of the Dog (That Bit You),A small amount of the alcoholic beverage that caused your hangover\n' +
    'Hands are Tied,You are prevented from doing something. It is not within your power\n' +
    'Hands Down,Undoubtedly\n' +
    'Hang It Up,"To retire, to end an activity one has pursued for a long time"\n' +
    'Hang Tough,Maintain one\'s resolve\n' +
    'Hanging by a Thread,In great danger of elimination or failure\n' +
    'Happy-Go-Lucky,"If you are a happy-go-lucky person, you are cheerful and carefree all the time."\n' +
    'Hard Nut to Crack,A difficult problem or a difficult person\n' +
    'Has the Cat Got Your Tongue?,Why are you not saying anything?\n' +
    'Hat Trick,"Scoring three goals in hockey or soccer (football), or accomplishing three of anything."\n' +
    'Hatchet Job,A strong attack on someone\'s reputation; intentionally destructive criticism; calumny\n' +
    'Haul Over the Coals,To scold someone severely\n' +
    'Have (one\'s) head in the clouds,Not know what is happening around you or out of touch with reality\n' +
    'Have A Ball,To have a very enjoyable time\n' +
    'Have a Bone to Pick (with Someone),To want to discuss something someone has done that has angered or annoyed you.\n' +
    'Have a Bone to Pick (with Someone),To want to discuss something someone has done that has angered or annoyed you.\n' +
    'Have a Chip on One\'s Shoulder,To harbor resentment; to have an angry attitude\n' +
    '"Have a Dog in the Hunt (Fight, Race)",To support a certain person in a competition\n' +
    'Have a Lead Foot,A tendency to drive very fast\n' +
    'Have a Lot on One\'s Plate,"Be busy, be in the middle of many ongoing tasks"\n' +
    'Have a Lot Riding On (Something),Be depending on the successful outcome or development of something\n' +
    'Have a Nose for (Something),"To have natural ability at something, a talent for finding something"\n' +
    'Have a Screw Loose,Be slightly unbalanced or crazy\n' +
    'Have a Tough Row to Hoe,Be faced with a task that is difficult because of unfavorable conditions\n' +
    'Have A Whale of A Time,To enjoy yourself very much\n' +
    'Have an Ace Up One\'s Sleeve,To have a hidden advantage\n' +
    'Have Bigger Fish to Fry,Have more important things to do\n' +
    'Have Egg on Your Face,They are made to look foolish or embarrassed\n' +
    'Have Foot-in-Mouth Disease,To embarrass oneself through a silly mistake\n' +
    'Have Hand of Aces/Hold All the Aces,To be in a very strong position in a competition\n' +
    'Have It Out with Someone,To have an argument with someone in order to settle a dispute\n' +
    'Have One Foot in The Grave,To be near death (usually because of old age or illness)\n' +
    'Have One Over the Eight,A person is slightly drunk.\n' +
    'Have One Too Many,Drink too much alcohol\n' +
    '"Have One\'s Cake and Eat It, Too",To want two incompatible things (usually used in the negative)\n' +
    'Have Skin in the Game,Be risking something in an undertaking\n' +
    'Have Something in the Bag,Be certain to win\n' +
    'Have the Hots for (Somebody),To be (sexually) attracted to somebody\n' +
    'Have the Hots for Somebody,Finding somebody extremely attractive\n' +
    'Have The Time of Your Life,"If you have the time of our life, you enjoy yourself very much."\n' +
    'Have the Time of Your Life,"To have a very fun, exciting, or enjoyable time"\n' +
    'Have Your Nose in the Air,Have a snobbish or disdainful attitude\n' +
    'Have Your Say,Express your opinion on something\n' +
    'Have Your Thumb Up Your Ass,Have nothing to do\n' +
    'He Who Laughs Last Laughs Best,Being victorious is often a matter of simply surviving a conflict\n' +
    'He Would Put Legs Under A Chicken,He will talk your head off; he is very talkative\n' +
    'Head (Go) South,"Decline, get worse"\n' +
    'Head and Shoulders Above,Far superior to\n' +
    'Head and Shoulders,Above Far superior to\n' +
    'Head Start,An advantage over everyone else\n' +
    'Heads Up (excl.),Get ready! Be prepared\n' +
    'Heads Up!,Be careful!\n' +
    'Heads Will Roll (Are Going to Roll),People will be fired\n' +
    'Heads Will Roll (Are Going to Roll),People will be fired\n' +
    'Hear (Something) Through the Grapevine,To learn something via gossip\n' +
    'Heart and Soul,With all one\'s energy or affection\n' +
    'Heavens Open,Start to rain heavily\n' +
    'Heavy Hitter,"A powerful, influential person"\n' +
    'Helicopter Parenting,Overattentive child-raising\n' +
    'Hell for Leather,"Very fast, as fast as possible"\n' +
    'High as a Kite,Strongly under the influence of drugs or intoxcants\n' +
    'High as a Kite,Strongly under the influence of drugs or intoxcants\n' +
    'High as a Kite,Strongly under the influence of drugs or intoxcants\n' +
    'Hightail It (Out of There),Flee\n' +
    'Highways and Byways,You take large and small roads to visit every part of the country.\n' +
    'Hit a Wall,suddenly stop making forward progress\n' +
    'Hit It Out of the Park,Succeed brilliantly\n' +
    'Hit the Books,To study (generally said of students\n' +
    'Hit the Ground Running,To begin a job or project with no learning or training period needed\n' +
    'Hit the Hay,To go to bed\n' +
    'Hit the Jackpot,Do something that brings great success\n' +
    'Hit the Nail on the Head,To be absolutely correct (said of an utterance)\n' +
    'Hit the Road,To leave\n' +
    'Hit the Roof,Explode in rage; become extremely angry\n' +
    'Hit the Roof,To become very angry\n' +
    'Hit the Sack,To go to bed\n' +
    'Hit the Spot,Be very satisfying (said of something eaten)\n' +
    'Hive Mind,The knowledge of humans as a group\n' +
    'Hobson\'s Choice,A choice among bad options\n' +
    'Hold One\'s Liquor,Be able to drink a large amount without being affected\n' +
    'Hold One\'s Peace,Be silent\n' +
    'Hold the Phone,Wait a moment (whether you\'re on the phone or not)\n' +
    'Hold the Phone,Wait a moment (whether you\'re on the phone or not)\n' +
    'Hold Your Horses (generally excl.),Stop; restrain yourself; don\'t be so excited\n' +
    'Home Away from Home,A habitual hangout; a place one frequents often and where one feels welcome\n' +
    'Home Truths,"Honest, often painful criticism"\n' +
    'Honor System,A system of payments that relies on the honesty of those paying\n' +
    'Hot Mess,Something or someone in a state of extreme disorder\n' +
    'Hot on the Heels (of),In close pursuit\n' +
    'Hot on the Heels (of),In close pursuit\n' +
    'Hot Potato,A controversial subject or difficult project that is best avoided\n' +
    'I Wouldn\'t Put It Past (Someone),I think it\'s quite possible that [this person] would do this.\n' +
    '"If It Had Been a Snake, It Would Have Bitten Me","It was very obvious, but I missed it."\n' +
    '"If the Shoe Fits, Wear It","If this description of you is accurate, accept it."\n' +
    'I\'m All Ears,"You have my attention, so you should talk"\n' +
    'In a Fog,"Confused, not mentally alert"\n' +
    'In a Heartbeat,Immediately. This is especially used in hypothetical situations\n' +
    'In a Jam,"In need of help, in a difficult spot"\n' +
    'In a New York Minute,Very quickly\n' +
    'In a Nutshell,Expressed in a few words\n' +
    'In a Pickle,"In need of help, in a difficult spot"\n' +
    'In a Rut,"Confined by routine, bored and seeking new experiences"\n' +
    'In Broad Daylight,"When something occurs in broad daylight, it means the event is clearly visible"\n' +
    'In Clover,Benefiting from a positive financial situation\n' +
    '"In For a Penny, In for a Pound",Committed to something even though the risks are increasing\n' +
    'In Full Swing,"When something, such as an event, gets into full swing, it is at its busiest or liveliest time."\n' +
    'In His Cups,Drunk\n' +
    'In Hot Water,In need of help; in trouble\n' +
    'In One Fell Swoop,"All at once, in a single action"\n' +
    'In One\'s Element,"In a situation which is entirely suitable, familiar, or enjoyable."\n' +
    'In Someone\'s Wheelhouse,In someone\'s strongest area of competence or enthusiasm\n' +
    'In Touch,In contact\n' +
    'In the Blink of an Eye,"Quickly, seemingly instantaneously"\n' +
    'In the Cards,Likely; likely to occur\n' +
    'In the Crosshairs (Cross Hairs),Targeted for blame or criticism\n' +
    'In the Dark,Not informed\n' +
    'In the Dark,Unaware of something\n' +
    'In the Driver\'s Seat,"In a dominant position, in control"\n' +
    'In the Hot Seat,Undergoing criticism or scrutiny; under pressure publicly\n' +
    'In the Interim,It denotes a period of time between something that ended and something that happened afterwards\n' +
    '"In the Limelight, In the Spotlight",Receiving large amounts of publicity or attention\n' +
    'In the Long Run,Over an extended period of time\n' +
    'In the Nick of Time,Just in time; with no time to spare\n' +
    '"In the opinion of the speaker, a person has just spent money unnecessarily and is, therefore, a fool.",\n' +
    'In the Pipeline,"Being prepared for the marketplace, being worked on"\n' +
    'In the Red,Losing money; (of a market index) below a specified starting point\n' +
    'In the Same Boat,In a similar situation; similarly vulnerable\n' +
    'In the Toilet,In disastrous condition\n' +
    'In the Works,Under development; coming soon\n' +
    '"Iron Out (Problems, Difficulties)",To resolve\n' +
    'Is the Pope Catholic?,Isn\'t the answer obvious?\n' +
    'It Never Rains but It Pours,Bad luck and bad things tend to happen at the same time\n' +
    'It Takes Two to Tango,"When something goes wrong involving two people, it\'s likely that they share the blame; cooperation is necessary"\n' +
    'It Takes Two to Tango,You say this when you think that a difficult situation or argument cannot be the fault of one person alone.\n' +
    'It Won\'t Fly,It won\'t work; it won\'t be approved.\n' +
    'Itchy Feet,A person who has itchy feet is someone who finds it difficult to stay in one place and likes to travel and discover new places.\n' +
    'It\'s a Wash,"A positive and a negative development cancel each other out, so the situation has neither improved nor gotten worse"\n' +
    'It\'s All Greek to Me,"It is unintelligible, impossible to understand"\n' +
    'It\'s No Skin off My (Your) Nose (Back),The outcome will not affect me personally\n' +
    'It\'s Not Over Till the Fat Lady Sings,Do not give up too soon; things may improve.\n' +
    'It\'s Not Rocket Science,It\'s not difficult to understand.\n' +
    'I\'ve Had It Up to Here,My patience is almost exhausted.\n' +
    'Jack of All Trades,A person with a wide variety of skills\n' +
    'Jam Session,Playing improvised music in an informal setting\n' +
    'Jim Crow,The system of racial segregation in the American South prior to the American civil rights movement.\n' +
    'Join the Club (excl.),I feel sympathy for you because I have experienced something similar.\n' +
    'Jump in with Both Feet,Begin a new experience wholeheartedly\n' +
    'Jump on the Bandwagon,To follow a trend or craze\n' +
    'Jump on the Bandwagon,To follow a trend; follow the crowd\n' +
    'Jump the Gun,Start doing something too soon\n' +
    'Jump the Shark,To pass peak quality and begin to decline. Often used to describe television programs or movie series.\n' +
    'Jump the Track,To shift suddenly from one activity or line of thought to another\n' +
    'Jump Through Hoops,Complete a series of tasks in order to satisfy someone\n' +
    'Just Around the Corner,Occurring soon\n' +
    'Just for the Record,I would like to make it clear that …\n' +
    'Just What the Doctor Ordered,Exactly the thing that is or was needed to help improve something or make one feel better\n' +
    'Kangaroo Court,A court of law where proper procedures are not followed at all; a sham judicial proceeding\n' +
    'Keep (Something) at Bay,Maintain a distance from something or someone\n' +
    'Keep a Stiff Upper Lip,Control one\'s emotions; not give in to fear or grief\n' +
    'Keep an Eye On,"To keep an eye on something or someone is to watch it periodically, to keep it under surveillance."\n' +
    'Keep an Eye Peeled,Be observant; watch out for something\n' +
    'Keep It Under Your Hat,Don\'t tell anyone; don\'t reveal this secret\n' +
    'Keep Someone at Arm\'s Length,Avoid close interaction or cooperation\n' +
    'Keep Your Nose Clean,Avoid trouble or situations that compromise one\'e honesty\n' +
    'Keep Your Powder Dry,Do not attack until you are ready.\n' +
    'Keeping One\'s Nose to the Grindstone,Working hard on something repetitive or tedious\n' +
    '"Kick Ass, Kick Butt",1) Defeat badly; 2) be excellent or highly effective (only kick ass would be used for 2)\n' +
    'Kick the Bucket,To die\n' +
    'Kick the Can Down the Road,Postpone an important decision\n' +
    'Kill a Fly With an Elephant Gun,Approach a problem with excessive measures\n' +
    'Kill Two Birds with One Stone,Act in such a way as to produce two desirable effects\n' +
    'Kill Two Birds with One Stone,Solve two problems with one move\n' +
    'Kill the Goose That Laid the Golden Egg,To destroy a source of ongoing profits or benefits\n' +
    'Kink in One\'s Neck,A cramp in one\'s neck that causes pain\n' +
    'King of the Hill,At the top of one\'s field; the most influential person in a given field or area\n' +
    'Kiss and Make Up,Make peace after an argument\n' +
    'Kith and Kin,Family (collectively)\n' +
    'Knock on Wood; Touch Wood,Let\'s hope I have good luck or continue to have good luck.\n' +
    'Knock Some Sense Into,To beat someone in order to teach him/her a lesson. May be used figuratively.\n' +
    'Knock Someone\'s Socks Off,Amaze someone\n' +
    'Knock Up,To impregnate a woman. Often used in the form knocked up.\n' +
    'Knockout,An extremely beautiful woman\n' +
    'Know (Something) Like the Back of One\'s Hand,"To be very familiar with something, especially an area"\n' +
    'Larger Than Life,"Conveying a sense of greatness, imposing"\n' +
    'Last But Not Least,What I have just said does not reflect a ranking in importance.\n' +
    'Laughter is the Best Medicine,Laughing a lot is a very effective means of recovering from physical or mental injury\n' +
    'Learn the Ropes,Become more familiar with a job or field of endeavor; be trained\n' +
    'Leave Someone in the Lurch,Abandon someone in a difficult situation\n' +
    'Lend an Ear,Listen\n' +
    'Let Bygones Be Bygones,Agree to forget about a past conflict\n' +
    'Let Bygones Be Bygones,Agree to forget about a past conflict\n' +
    'Let Off Steam,To express anger and frustration in a way that does no damage\n' +
    'Let One\'s Hair Down,To relax and enjoy themselves.\n' +
    'Let Sleeping Dogs Lie,To avoid stirring up a problem; to leave things alone\n' +
    'Let the Cat Out of the Bag,"Reveal a secret, usually a secret you or others are trying to keep"\n' +
    'Let the Genie Out of the Bottle,Reveal something hitherto suppressed\n' +
    'Letter of the Law,"The explicit meaning of a law, as opposed to the spirit of the law, the law\'s general intention"\n' +
    'Lick One\'s Wounds,Rest after a bad defeat\n' +
    'Life is A Bowl of Cherries,Life is wonderful or very pleasant\n' +
    'Light a Fire Under Someone,Inspire someone to work very hard\n' +
    'Light at the End of the Tunnel,A sign of hope after a long period of difficulties\n' +
    'Like a Kid in a Candy Store,To be so excited about one\'s surroundings that one acts in a childlike or silly way\n' +
    'Like a Moth to a Flame,Drawn to something or someone despite the dangers\n' +
    '"Like Father, Like Son","Sons inherit their fathers\' traits and preferences, often even without realizing it."\n' +
    'Like Shooting,Fish in a Barrel Very easy\n' +
    'Like Taking Candy from a Baby,Very easy\n' +
    'Like Two Peas in a Pod,Bearing a strong resemblance\n' +
    'Like The Cat That Got The Cream,"Looking particularly self-satisfied, often to the annoyance of others"\n' +
    'Lion\'s Den,Any dangerous or frightening place.\n' +
    'Lion\'s Share,The largest part of something\n' +
    'Live Large,Have a luxurious lifestyle\n' +
    'Living in Cloud Cuckooland,Having unrealistic or foolish beliefs or plans.\n' +
    'Living on Borrowed Time,"Following an illness or near-death experience, may people believe they have cheated death"\n' +
    'Living Under a Rock,Ignorant of important events. Usually used as a question\n' +
    'Loaded for Bear,"Prepared for problems, well prepared for a challenge"\n' +
    'Loan Shark,A predatory lender; one who makes high-interest loans to desperate people\n' +
    'Lock Horns,"To lock horns is to argue, to come into conflict."\n' +
    'Long Shot,Something with little chance of success\n' +
    'Look the Other Way,"Take no notice of violations of laws or rules, unofficially condone something"\n' +
    'Look What the Cat Dragged In,Someone unwelcome has arrived.\n' +
    'Loose Cannon,Someone out of control; someone who speaks or acts recklessly\n' +
    'Lose It,To suddenly become unable to behave or think in a sensible way\n' +
    'Lose One\'s Touch,Suffer a decline in one\'s skill at doing something\n' +
    'Lose Touch,To fall out of contact\n' +
    'Lose the Thread,Be unable to follow someone\'s reasoning\n' +
    'Love at First Sight,Falling in love with somebody the first time you see them\n' +
    'Love Rat,Somebody who cheats on his/her partner\n' +
    'Love Someone With All of One\'s Heart And Soul,To love someone completely\n' +
    'Lower the Boom,Implement a punishment; reprimand severely\n' +
    'Low-Hanging Fruit,Easy parts of a task; solutions easy to obtain\n' +
    'Mad As A Box Of (Soapy) Frogs,extremely mentally unstable; psychotic; detached from reality.\n' +
    'Mad as A Hatter,"Mentally ill, psychotic"\n' +
    'Main Squeeze,Committed romantic partner\n' +
    'Make a Break for It,"Try to escape, run off"\n' +
    'Make a Mountain out of a Molehill,To take something too seriously; to make too much of something\n' +
    'Make a Silk Purse out of a Sow\'s Ear,Turn something ordinary or inferior into something refined and beautiful\n' +
    'Make Ends Meet,Have enough money to cover basic expenses\n' +
    'Make Hay (While the Sun Shines),To take advantage of an opportunity at the right time.\n' +
    'Make Love,To have sexual intercourse\n' +
    'Make Nice,Act cordial despite conflict\n' +
    'Make One\'s Mark,Attain influence or recognition\n' +
    'Make Someone\'s Day,Do something pleasing that puts someone in a good mood\n' +
    'Make Waves,"Cause controversy, disturb a calm group dynamic"\n' +
    'Man Cave,"A part of the house, often the basement, that is left to the man of the household, perhaps with a workshop, a television for watching sports, etc."\n' +
    'March to the Beat of Your Own Drum,"When someone does things the way they want to, without taking anybody else or anything else into consideration."\n' +
    'Match Made in Heaven,"A relationship in which the two people are great together, because they complement each other so well"\n' +
    'May-December (adj.),Significantly different in age. Said of couples where one member is much older. The most common usage is May-December romance.\n' +
    'May-December Marriage,"A marriage between a younger and an older partner, typically a young woman and an old man."\n' +
    'Me Time,"Activities undertaken for one\'s own enjoyment, free from responsibilities to others."\n' +
    'Meeting of the Minds,Strong instinctive agreement on something\n' +
    'Mend Fences,Improve relations after a dispute\n' +
    'Mind One\'s P\'s and Q\'s,Be attentive to details; be on one\'s best behavior\n' +
    'Miss the Boat,Be too late for something; miss an opportunity\n' +
    'Monday Morning Quarterback,Someone who offers criticisms or comments after already knowing the outcome of something\n' +
    'Month of Sundays,"A long time, many months"\n' +
    'More Fun Than A Barrel of Monkeys,A very good time; a pleasant occasion\n' +
    'Mother Nature,The natural world\n' +
    'Move Heaven and Earth,Take all possible steps in trying to accomplish something\n' +
    'Move the Needle,Have a measurable effect on something\n' +
    'Move Up in the World,Become more successful\n' +
    'Movers and Shakers,"Influential people, especially in a particular field"\n' +
    'Much Of A Muchness,"Essentially equal, not significantly different (said of a choice)"\n' +
    'Mum\'s the Word,This is secret; don\'t talk about this. Often used as an answer to a request not to talk about something.\n' +
    'Music to My Ears,Good to hear; welcome news\n' +
    'Mutton Dressed Up as Lamb,A woman who dresses in a style appropriate to someone of a younger age\n' +
    'My Dogs Are Barking,My feet hurt.\n' +
    '"My Old Man, My Old Lady",My spouse\n' +
    'My Way or the Highway,"If you do not do things the way I want or require, then you can just leave or not participate."\n' +
    'Nail-Biter,A suspenseful event\n' +
    'Nailing Jelly/Jello/Pudding To A Wall/Tree,An impossible task\n' +
    'Neck and Neck,"Very close in a competition, with neither of two entities clearly in the lead"\n' +
    'Neck of the Woods,"A region, especially one\'s home region"\n' +
    'Nest Egg,Retirement savings; wealth saved for a future purpose\n' +
    'Never in A Million Years,Absolutely never\n' +
    'Never Look a Gift Horse in the Mouth,It\'s rude to examine a gift closely; accept gifts politely.\n' +
    'New Wrinkle,"A novel aspect to a situation, a new development"\n' +
    'Nice Chunk of Change,A large amount of money\n' +
    'Nickel and Dime,"To negotiate over very small sums; to try to get a better financial deal, in a negative way"\n' +
    'Nine Times Out of Ten,Almost always\n' +
    'Nine-to-Five Job,A routine job in an office that involves standard office hours\n' +
    'Nip (Something) In The Bud,Deal with a problem before it becomes large\n' +
    '"No Holds Barred (usually adj., often hyphenated)","Unrestricted, without rules"\n' +
    'No Love Lost Between,There is a mutual animosity between two people\n' +
    '"No Names, No Pack Drill","By not accusing anyone specifically, I may avoid trouble."\n' +
    '"No Names, No Pack Drill","If no one can be identified, no one will be punished."\n' +
    'No Rhyme or Reason (to),Without logic or pattern\n' +
    'No Room to Swing A Cat,"Very small, not big enough"\n' +
    '"No Shit, Sherlock",That\'s very obvious!\n' +
    'No Tree Grows to the Sky,Growth cannot continue indefinitely.\n' +
    'Not Cut Out for (Something),Not naturally skillful enough to do something well\n' +
    'Not Enough Room to Swing a Cat,A very small space\n' +
    'Not Give A Fig,To not care at all about something\n' +
    'Not Have A Cat In Hell\'s Chance,"Have no possibility of succeeding, coming to pass, or achieving something"\n' +
    'Not Have a Prayer,Have no chance of success\n' +
    'Not Know Jack,Not know anything\n' +
    'Not Lift a Finger,Do nothing to help\n' +
    'Not Mince Words,Moderate or weaken a statement\n' +
    'Not One\'s Cup of Tea,Not something one is interested in\n' +
    'Not Playing with A Full Deck,"Stupid, mentally deficient or impaired"\n' +
    'Not Ready for Prime Time,Not yet perfected; inexperienced\n' +
    'Not Sit Well with (Someone),Be difficult to accept; make someone uncomfortable\n' +
    'Nothing to Write Home About,"Unspectacular, ordinary"\n' +
    'Nuts and Bolts,Everyday details of something\n' +
    'Nutty as a Fruitcake,Crazy; idiotic; wacky.\n' +
    'Pack Heat,Carry a gun\n' +
    'Paddle One\'s Own Canoe,To be able to act independently.\n' +
    'Page-Turner,"A page-turner is an exciting book that\'s easy to read, a book that\'s difficult to put down."\n' +
    'Pain in the Ass; Pain in the Butt;,\n' +
    'Pain in the Neck,Someone or something making your life difficult\n' +
    'Paint the Town Red,Go out drinking and partying\n' +
    'Par for the Course,What would normally be expected. This has a negative connotation.\n' +
    'Pass the Buck,Transfer a problem to someone else\n' +
    'Pass With Flying Colors,"To succeed brilliantly, as on an exam or other test"\n' +
    'Passing Fancy,A temporary interest or attraction\n' +
    'Pay Through the Nose (For Something),Pay a large amount of money\n' +
    'Peaches and Cream,"A situation, process, etc., that has no trouble or problems"\n' +
    'Pecking Order,"Hierarchy, rank of importance"\n' +
    'Pencil Something In,Make tentative arrangements\n' +
    'Penny-Pinching,"Frugal, avoiding expenses whenever possible"\n' +
    'Pep Talk,An encouraging speech given to a person or group\n' +
    'Perfect Storm,A rare combination of disastrous occurrences\n' +
    'Pet Peeve,A small thing that you find particularly annoying\n' +
    'Pick a Fight,Intentionally provoke a conflict or fight with someone\n' +
    'Pick Up the Slack,Do something that someone else is not doing; assume someone else\'s responsibilities\n' +
    'Pick Up the Tab,"To pay a bill presented to a group, especially in a restaurant or bar"\n' +
    'Pie in the Sky,Something that is unrealistic or that cannot be achieved\n' +
    'Piece of Cake,Very easily done\n' +
    'Pin Someone Down,Demand a decision or clear answer\n' +
    'Pinch Pennies,"To be careful with money, to be thrify"\n' +
    'Pink Slip,"A layoff notice; loss of a job, typically because of layoffs"\n' +
    'Pipe Dream,"An unrealistic hope, a fantasy"\n' +
    'Piping Hot,Very hot (generally said of food)\n' +
    'Pipped to the Post,Defeated by a narrow margin\n' +
    'Pissing Contest,"A meaningless argument or competition, typically between males"\n' +
    'Play Ball,"Cooperate, agree to participate"\n' +
    'Play Cat And Mouse,Trying to trick someone into making a mistake so you can defeat them.\n' +
    'Play Hardball,Adopt a tough negotiating position; act aggressively\n' +
    'Play it by Ear,To play a piece of music without referencing sheet music or a recording\n' +
    'Play It by Ear,To respond to circumstances instead of having a fixed plan\n' +
    'Play the Percentages,Bet on or rely on what is most likely to happen\n' +
    'Play the Ponies,Bet on horse racing.\n' +
    'Play With Fire,Do something very risky\n' +
    'Play Your Cards Right,Exploit a situation to your best advantage\n' +
    'Point of No Return,A place from which it is impossible to go back to the starting point\n' +
    'Point the Finger At,Blame (someone)\n' +
    'Point the Finger,At Blame (someone)\n' +
    'Poison Pill (n),"A provision or feature added to a measure or an entity to make it less attractive, an undesirable add-on"\n' +
    'Poison Pill,"A provision or feature added to a measure or an entity to make it less attractive, an undesirable add-on"\n' +
    'Pop One\'s Clogs,To die\n' +
    'Pop One\'s Cork,To release one\'s anger; to blow one\'s top\n' +
    'Pop the Question,Propose marriage\n' +
    'Pot Calling the Kettle Black,Accusing someone of something of which you are also guilty; being hypocritical\n' +
    'Pour (Rub) Salt into (on) the Wound (an open wound),Worsen an insult or injury; make a bad situation worse for someone\n' +
    'Powder Keg,"An explosive situation, a situation in which people are angry and ready to be violent"\n' +
    'Powder Keg,"An explosive situation, a situation in which people are angry and ready to be violent"\n' +
    'Powder One\'s Nose,To use the restroom (lavatory). This is used by women\n' +
    '"Preach to the Choir, Preach to the Converted",To make an argument with which your listeners already agree\n' +
    'Preaching to the Choir,Making arguments to those who already agree with you\n' +
    'Pretty Penny,A lot of money; too much money (when referring to the cost of something)\n' +
    'Price Yourself Out of the Market,Try to sell goods or services at such a high price that nobody buys them.\n' +
    'Puddle Jumper,"A small airplane, used on short trips"\n' +
    'Pull Out All the Stops,Do everything possible to accomplish something\n' +
    'Pull Strings,Use influence that\'s based on personal connections\n' +
    'Pull the Plug On,Terminate (something)\n' +
    'Pull Yourself Together,Control your emotions; recover from a strong emptional upset\n' +
    'Puppies And Rainbows,"Perfect, ideal (usually used slightly sarcastically, in contrast with a less ideal situation)"\n' +
    'Puppy Dog Eyes,A begging look\n' +
    'Puppy Love,"Adolescent love or infatuation, especially one that is not expected to last"\n' +
    'Pure as the Driven Snow,To be innocent and chaste (frequently used ironically)\n' +
    'Push the Envelope,"Go beyond common ways of doing something, be innovative"\n' +
    'Pushing Up Daisies,Dead\n' +
    'Pushing Up Daisies,Dead and buried\n' +
    'Put a Thumb on the Scale,"Try to influence a discussion in an unfair way, cheat"\n' +
    'Put Down Roots,Establish oneself in a place; settle\n' +
    'Put in One\'s Two Cents,Say your opinion\n' +
    'Put Lipstick on a Pig,Make cosmetic changes to something bad\n' +
    'Put one\'s Face On,Apply cosmetics\n' +
    'Put Out Feelers,"Make discreet, informal suggestions, ask around"\n' +
    'Put Someone on the Spot,Force someone to answer a question or make a decision immediately\n' +
    'Put That in Your Pipe and Smoke It,"Accept and consider what I\'m saying, even if you don\'t like it!"\n' +
    'Put the Best Face On (Something),Emphasize the positive aspects of a bad situation\n' +
    'Put the Brakes On,Slow something down\n' +
    'Put the Cart Before The Horse,To do things in the wrong order\n' +
    'Put the Cart Before the Horse,To do things out of the proper order.\n' +
    'Put the Cat Among The Pigeons,Say or do something that causes trouble or controversy\n' +
    'Put the Genie Back in the Bottle,Try to suppress something that has already been revealed or done\n' +
    'Put the Pedal to the Metal,Drive as fast as possible\n' +
    'Put Up with (Something),"Tolerate, accept"\n' +
    'Put Words Into Someone\'s Mouth,Attributing an opinion to someone who has never stated that opinion\n' +
    'Put Your Foot Down,Use your authority to stop negative behavior\n' +
    'Put Your Foot In Your Mouth,Say something that you immediately regret\n' +
    'Put Your Money Where Your Mouth Is,Back up your opinions with a financial commitment\n' +
    'Quake In One\'s Boots,To be very frightened\n' +
    'Quarter Past,Fifteen minutes after the hour\n' +
    'Quarter To/Of,Fifteen minutes before the hour\n' +
    'Queer the Pitch,Interfere with someone\'s plans; make something more difficult\n' +
    'Quick as a Flash,Very fast\n' +
    'Quick-and-Dirty,"Approximate, hastily done"\n' +
    'Quote Unquote,"Ironically speaking; suggesting that if a phrase were written out, it would be in quotation marks to convey sarcasm"\n' +
    'Race Against Time,"To rush to meet a deadline, to be forced to do something very quickly"\n' +
    'Rain Cats And Dogs,Rain heavily\n' +
    'Rain Cats and Dogs,Rain very heavily\n' +
    'Rain on Someone\'s Parade,Spoil someone\'s plans\n' +
    'Raise (Someone\'s) Hackles,Make someone angry and defensive\n' +
    'Raise One\'s Voice,Talk loudly\n' +
    'Raise Red Flags,Warn of trouble ahead\n' +
    'Raise the Bar,Increase standards in a certain competition or area of endeavor\n' +
    'Raise the Roof,Make a great deal of noise (said of a crowd)\n' +
    'Rake (Someone) Over the Coals,To scold someone severely\n' +
    'Rake Over the Ashes,Restart a settled argument; examine a failure\n' +
    'Rake Someone Over the Coals,Scold severely\n' +
    'Rank and File,The ordinary members of an organization\n' +
    'Read Between the Lines,Perceive what is not explicitly stated\n' +
    'Read the Tea Leaves,Predict the future from small signs\n' +
    'Rear Its Ugly Head (said of a problem or something unpleasant),"Appear, be revealed"\n' +
    'Rearrange the Deck Chairs on the Titanic,Taking superficial actions while ignoring a much larger and perhaps fatal problem\n' +
    'Red Flag,A warning; a sign of trouble ahead\n' +
    'Red Herring,A misleading clue; something intended to mislead\n' +
    'Red Meat,Political appeals designed to excite one\'s core supporters; demagoguery\n' +
    'Red Tape,Bureaucracy; difficult bureaucratic or governmental requirements\n' +
    'Red-Light District,A neighborhood with many houses of prostitution\n' +
    'Reinvent the Wheel,Devise a solution to a problem for which a solution already exists\n' +
    'Riding High,Enjoying success\n' +
    'Right as Rain,Absolutely correct\n' +
    'Right Under (One\'s) Nose,"In an obvious location, yet overlooked"\n' +
    'Right-Hand Man,Chief assistant\n' +
    'Right-Hand Man,Chief assistant\n' +
    'Ring a Bell,Sound familiar\n' +
    'Ring a Bell,When something seems familiar\n' +
    'Rob Peter to Pay Paul,Pay off a debt with another loan; solve a problem in such a way that it leads to a new problem\n' +
    'Rob the Cradle,To be sexually or romantically involved with someone who is very young\n' +
    'Rob the Cradle,To be sexually or romantically involved with someone who is very young\n' +
    'Rock Bottom,An absolute low point\n' +
    'Rock the Boat,Cause a disruption in a group. Often used in the negative\n' +
    'Roll the Dice On,Take a risk\n' +
    'Roll With the Punches,Deal with problems by being flexible\n' +
    'Rome Wasn\'t Built in a Day,Complex projects take time\n' +
    'Rookie Mistake,An error made by an inexperienced person\n' +
    'Rotten to the Core,Entirely evil\n' +
    'Rub (Something) in Someone\'s Face,Humiliate someone by repeating and criticizing his or her mistake\n' +
    'Rub It In,Say something that makes someone feel even worse about a mistake\n' +
    'Rub Someone\'s Nose in (Something),Humiliate someone by repeating and criticizing his or her mistake\n' +
    'Rubber-Stamp (v.),"Approve something without consideration, as a formality"\n' +
    'Rule of Thumb,"A general principle or guideline, not a specific formula"\n' +
    'Run a Tight Ship,"Manage an organization in a strict, well-regulated way"\n' +
    'Run in the Family,Be inherited (as a trait) by multiple members of a family\n' +
    'Run in the Family,To be a common family characteristic\n' +
    'Run into a Buzz,Saw Encounter severe and unexpected problems\n' +
    'Run into a Buzz,Saw Encounter severe and unexpected problems\n' +
    'Run off at the Mouth,"Talk a lot about unimportant things, talk incoherently"\n' +
    'Run on Fumes,To be in a situation where one\'s energy or resources is almost exhausted\n' +
    'Run Out of Steam,"Lose momentum, become tired"\n' +
    'Run the Table,Win every game or contest\n' +
    'Sacred Cow,An indvidual or organization that one cannot criticize\n' +
    'Saving Grace,Something that redeems a bad situation\n' +
    'Scare the Living Daylights Out of Someone,Frighten someone severely\n' +
    '"Scorched Earth (Tactics, Policy, etc.)","Ruthless, extremely destructive"\n' +
    'Screw The Pooch,To make a serious error\n' +
    'School Of Hard Knocks,Difficult real-life experiences from which one has learned\n' +
    'Second Banana,A person in a subservient position\n' +
    'Second Stringer,A substitute player in a sport; a substitute for a job who is not the most talented person\n' +
    'Second Wind,Renewed energy\n' +
    'See Eye to Eye,"To concur, agree"\n' +
    'See Something Out of the Corner of Your Eye,Use peripheral vision\n' +
    'Seize (Take) the Bull By the Horns,Attack a problem directly\n' +
    'Seize the Day,Take an opportunity\n' +
    'Sell (Someone) a Bill of Goods,Trick someone; be deceptive\n' +
    'Sell Like Hotcakes,Be sold very quickly\n' +
    'Selling Point,An attractive feature of something for sale\n' +
    'Set in Stone,Fixed; unchangeable\n' +
    'Set something to Music,To write a piece of music to accompany a set of words\n' +
    'Set the Bar (Too) High,To set a high standard for something\n' +
    'Set the Thames on Fire,Do something amazing. Usually used in the negative.\n' +
    'Set the World on Fire,Do something amazing; have a brilliant stretch in one\'s career\n' +
    'Shake the Dust off Your Shoes (Feet),Make a clean break with a relationship or situation\n' +
    'Shape Up or Ship Out,Behave properly or leave the organization\n' +
    'Sharp as A Tack,Mentally agile\n' +
    'Shell Game,A method of deception in which you conceal your actions by moving something frequently\n' +
    'Shift Gears,"Change the subject, or change what one is doing"\n' +
    'Shipshape And Bristol Fashion,"Tidy, clean"\n' +
    'Shit a Brick,Be extremely fearful.\n' +
    'Shoot from the Hip,Talk or act without consideration\n' +
    'Shoot Off One\'s Mouth,Talk without considering one\'s words\n' +
    'Shoot Oneself In The Foot,Do something that damages oneself or one\'s own cause\n' +
    'Short Fuse,A quick temper; a tendency to anger quickly\n' +
    'Shot Across the Bow,A warning of more serious actions to come\n' +
    'Shoulder A Weight Off Your Shoulders,You no longer worry about something or deal with something difficult\n' +
    'Show Me an X And I\'ll Show You a Y,There is a consequence to X that you may not have thought of.\n' +
    'Show One\'s True Colors,Reveal one\'s true nature\n' +
    'Show Your Cards,Reveal your resources or plans\n' +
    'Sick and Tired of,Extremely annoyed by something that occurs repeatedly\n' +
    'Sick as a Dog,Extremely ill.\n' +
    'Sick as a Parrot,Very disappointed\n' +
    'Sight for Sore Eyes,A sight that makes you happy\n' +
    'Silver Bullet,Something simple that resolves a difficult problem\n' +
    'Simmer Down,Become less angry; regain one\'s composure\n' +
    'Sink or Swim,Fail or succeed\n' +
    'Sing a Different Tune,Change your opinion\n' +
    'Sit On (Something),Delay revealing or acting on something\n' +
    'Sit Tight,Wait and do not go anywhere\n' +
    'Sitting Duck,Something or someone easily attacked or criticized\n' +
    'Sitting Pretty,In a favorable situation\n' +
    'Six Feet Under,Dead and buried\n' +
    'Six Feet Under,Dead and buried\n' +
    '"Six of One, a Half Dozen of the Other",The two choices have no significant differences.\n' +
    'Six Ways to (from) Sunday,In every possible way\n' +
    'Slam Dunk,An effort that is certain to succeed\n' +
    'Sleep Like a Baby,To experience a very deep and restful sleep; to sleep soundly\n' +
    'Sleep with the Fishes,"Dead, often by murder"\n' +
    'Slip Someone a Mickey,Add a drug to an alcoholic drink in order to knock someone out\n' +
    'Slippery Slope,"A series of undesirable effects that, one warns, could result from a certain action"\n' +
    'Slower than Molasses,Exceptionally slow or sluggish; not fast at all.\n' +
    'Small Beer,"Unimportant, insignificant"\n' +
    'Small Fry,People or organizations with little influence; children\n' +
    'Small Potatoes,"Unimportant, insignificant"\n' +
    'Smell a Rat,Suspect deception\n' +
    'Smoking Gun,indisputable evidence of a crime\n' +
    'Snafu,A malfunction; a chaotic situation\n' +
    'Snake Oil,A useless medicine; a quack remedy; a product or measure promoted as a solution that really does nothing to help\n' +
    'Snake Oil,Medicine of unproven value; fraudulent medicine\n' +
    'Sneak Peek,A sneak peek is an opportunity to view something in advance of its official opening or debut\n' +
    'Soak Up the Sun,To enjoy the sun\n' +
    'Sold On (Something),Convinced of something\n' +
    'Some Eggs,Achieving a major goal requires the ability to tolerate some problems\n' +
    'Someone\'s Fingerprints Are All Over (Something),Someone\'s influence is evident\n' +
    'Something to Crow,"About Something to be proud of, an accomplishment about which one is justified in bragging"\n' +
    'Son of a Gun,1) A rogue. 2) An exclamation of surprise.\n' +
    'Sore Point,A sensitive topic for a particular person\n' +
    'Sour Grapes,Disparagement of something that has proven unattainable\n' +
    'Sour Grapes,Spiteful disparagment of a goal one has failed to achieve\n' +
    'Spare The Rod And Spoil The Child,It is necessary to physically punish children in order to raise them right.\n' +
    'Speak of the Devil (and He Shall Appear),The person we have just been talking about has entered.\n' +
    'Speak with A Plum in (one\'s) Mouth,To speak in a manner that is indicative of a high social class.\n' +
    'Spick and Span,Clean and neat\n' +
    'Spill the Beans,Reveal a secret\n' +
    'Spin A Yarn,Tell a story\n' +
    'Spin One\'s Wheels,Engaging in activity that yields no progress; getting nowhere\n' +
    'Spit into The Wind,Wasting time on something futile\n' +
    'Spoiling for a Fight,"Combative, wanting conflict, eager to argue or fight"\n' +
    'Spoiling for a Fight,"Combative, wanting conflict, eager to argue or fight"\n' +
    'Square the Circle,Attempt an impossible task\n' +
    'Stab Someone in the Back,To betray (somebody)\n' +
    'Stalking Horse,Someone who tests a concept in advance of its application; a candidate who enters a political race in order to test the strength of the incumbent\n' +
    'Stand (Someone) In Good Stead,Be useful in the future\n' +
    'Stand On One\'s Own Two Feet,To be independent and self-sufficient\n' +
    'Stand One\'s Ground,Refuse to back down; insist on one\'s position\n' +
    'Start with a Clean Slate,To start (something) again with a fresh beginning; to work on a problem without thinking about what has been done before\n' +
    'Steal Someone\'s Thunder,Upstage someone\n' +
    'Stem the Tide,"To stop or control the growth of something, usually something unpleasant."\n' +
    'Step Up One\'s Game,Work to advance to a higher level of a competition\n' +
    'Step Up to the Plate,"Prepare to take action, be the person in a group who takes action"\n' +
    'Stick It to the Man,Do something that frustrates those in authority\n' +
    'Stick Your Nose into Something,Intrude into something that is not your affair\n' +
    'Sticker Shock,Surprise at the high price of something\n' +
    'Stick-in-the-Mud,A person who dislikes or adapts slowly to new ideas\n' +
    'Sticky Wicket,"A difficult, tricky situation"\n' +
    'Stiff-Necked,Stubborn; excessively formal\n' +
    'Storm in a Teacup,"A commotion that dies down quickly, about something unimportant"\n' +
    'Stormy Relationship,Relationship that has a lot arguments and disagreement\n' +
    'Stumbling Block,"An obstacle, physical or abstract"\n' +
    'Straight Arrow,"An honest, trustworthy person"\n' +
    'Strain at a Gnat and Swallow a Camel,To make a fuss over something unimportant while ignoring larger issues\n' +
    'Strike A Chord,"Used to describe something that is familiar to you, reminds you of something or is connected to you somehow."\n' +
    'Sugar Daddy,A rich man who is generous with younger women in return for sexual favors\n' +
    'Sure-Fire,Certain to occur\n' +
    'Swan Song,A final appearance\n' +
    'Swan Song,This expression is used to describe a final act before dying or ending something.\n' +
    'Sweep Under the Carpet,Attempt to temporarily conceal a problem or error\n' +
    'Sweep Under the Rug,Attempt to temporarily conceal a problem or error\n' +
    'Sweet Dreams!,Sleep well!\n' +
    'Sweeten the Deal,Add something to an offer during a negotiation\n' +
    'Sweeten the Pot,"Increase the amount of winnings potentially available in a game of chance, especially poker"\n' +
    'Swim Against the Tide,Do something contrary to a trend or usual opinion\n' +
    'Swim with Sharks,To take a major risk\n' +
    'Swim with the Fishes,"Have been killed, especially with involvement of organized crime"\n' +
    'Swing for the Fences,Attempt to achieve the largest accomplishment possible\n' +
    'Swing for the Fences,Attempt to achieve the largest accomplishment possible\n' +
    'Sword of Damocles,Something that causes a feeling of constant threat.\n' +
    'Take (Someone) to the Cleaners,1) Swindle; 2) defeat badly\n' +
    'Take a Deep Dive (Into),Explore something extensively\n' +
    'Take a Flyer,To take a rise; especially to make a speculative investment\n' +
    'Take a Gander,Go to take a look at something\n' +
    'Take a Hike,Go away\n' +
    'Take A Powder,"To leave, especially in order to avoid a difficult situation"\n' +
    'Take a Rain Check,Decline an invitation but suggest that you\'ll accept it at a later time.\n' +
    'Take Five (Ten),Take a short break of five (ten) minutes\n' +
    'Take Five,To take one brief (about five minutes) rest period\n' +
    'Take It Easy,"1) Relax, rest; 2) (as a command) Calm down!"\n' +
    'Take It Easy,Don\'t hurry; relax; don\'t get angry\n' +
    'Take It Easy,"When you relax, or do things at a comfortable pace, you take it easy."\n' +
    'Take It on The Chin,Be attacked; suffer an attack\n' +
    'Take It or Leave It (command),You must decide now whether you will accept this proposal\n' +
    'Take Someone to Task,Reprimand someone strongly\n' +
    'Take Something with a Pinch (grain) of Salt,"If you take what someone says with a pinch of salt, you do not completely believe it."\n' +
    'Take the Cake,Be the most extreme instance\n' +
    'Take the Edge Off (of Something),To slightly improve something negative\n' +
    'Take the Fifth,Refuse to answer because answering might incriminate or cause problems for you\n' +
    'Take the Gloves Off,Negotiate in a more aggressive way\n' +
    'Take the High Road,Refuse to descend to immoral activities or personal attacks\n' +
    'Take The Mickey (Piss) (Out Of Someone),Make fun of or ridicule someone\n' +
    'Take the Shine Off (Something),To do something that diminishes a positive event\n' +
    'Take the Starch out of (Someone),Make someone less confident or less arrogant\n' +
    'Take The Wind Out of Someone\'s Sails,"To reduce someone\'s confidence, ofte by doing something unexpected"\n' +
    'Take Your Life in Your Hands,Undergo extreme risk\n' +
    'Take Your Medicine,"Accept something unpleasant, for example, punishment, without protesting or complaining"\n' +
    'Take Your Time,"Don\'t hurry, work at a relaxed pace"\n' +
    'Taste of Your Own Medicine,The same unpleasant experience or treatment that one has given to others\n' +
    'Teach an Old Dog New Tricks,To change someone\'s long-established habits. Usually used in the negative\n' +
    'Tear One\'s Hair out,Be extremely worried or frustrated\n' +
    'Tear-Jerker,A film or book that makes you cry\n' +
    'Tee Many Martoonies,"Too many martinis, scrambled to suggest drunkenness"\n' +
    'Tell It to the Marines,I don\'t believe you; you must think I\'m gullible.\n' +
    'Tempest in a Teapot,A commotion about something unimportant\n' +
    'Ten a Penny,"Ordinary, inexpensive"\n' +
    'Ten to One,Something very likely\n' +
    'Test the Waters,Experiment with something cautiously\n' +
    'Test the Waters,Try something out in a preliminary way\n' +
    'Tie the Knot,Get married\n' +
    'Tighten the Screws,Increase pressure on someone\n' +
    'Tight-Lipped,"secretive, unwilling to explain something"\n' +
    'Til the Cows Come Home,For a very long time\n' +
    'Time is Money,"time is valuable, so don\'t waste it."\n' +
    'Tip of the Iceberg,"A small, visible part of a much larger problem"\n' +
    'Tip One\'s Hand,Reveal one\'s advantages; reveal useful information that one possesses\n' +
    'TLC,Tender Loving Care\n' +
    'To be A Peach,"Someone or something that is extremely good, impressive, or attractive"\n' +
    'To be Smitten With Someone,To be completely captivated by someone and feel immense joy\n' +
    'To be someone\'s One and Only,To be unique to the other person\n' +
    'To be the Apple of Someone\'s Eye,To be loved and treasured by someone\n' +
    'To Bear Fruit,To develop in a profitable or positive way\n' +
    'To Bear Fruit,To develop in a profitable or positive way\n' +
    'To Carpool,To travel to the same place with a group of people in one car. e.g. work/school\n' +
    'To Each His Own,People have different tastes.\n' +
    'To Get Cold Feet,To experience reluctance or fear\n' +
    'To Have a Chip on One\'s Shoulder,"To be combative, to be consistently argumentative"\n' +
    'To Have Butterflies In Your Stomach,To be nervous\n' +
    'To Have One For the Road,To have one last (alcoholic) drink before you go home\n' +
    'To Pay an Arm and a Leg,A very high cost\n' +
    'To Pop (one\'s) Cherry,To do something for the first time\n' +
    'To Pull Someone\'s Leg,Lie playfully\n' +
    'To Run Hot and Cold,To be unable to make up one\'s mind\n' +
    'To the Letter,Exactly (said of instructions or procedures)\n' +
    'Toe the Line,"Accept authority, follow the rules"\n' +
    'Tone-Deaf,"Not good at perceiving the impact of one\'s words, insensitive"\n' +
    'Tongue-in-Cheek,Said ironically; not meant to be taken seriously\n' +
    'Too Busy Fighting Alligators to Drain the Swamp,So occupied with multiple challenges that one can\'t keep the big picture in mind\n' +
    'Too Many Cooks Spoil the Broth,A project works best if there is input from a limited number of people\n' +
    'Too Many Chiefs and Not Enough Indians,"Everyone wants to be a leader, and no one wants to do the actual work"\n' +
    'Too Many To Shake A Stick At,A large number\n' +
    'Toot Your Own Horn,Brag; emphasize one\'s own contributions\n' +
    'Top Banana,"The boss, the leader"\n' +
    'Toss a Wrench (Spanner) Into,Sabotage; cause a process to stop\n' +
    'Touch Base,Meet briefly with someone\n' +
    'Touch One\'s Heart,"Affect someone emotionally, be touching"\n' +
    'Touch Water,Be launched. Said of a boat.\n' +
    'Tough Cookie,A very determined person\n' +
    'Tough Cookie,Someone who can endure hardship; especially\n' +
    'Tough Sledding,Difficult progress\n' +
    'Turn a Blind Eye,(to) Choose not to notice something\n' +
    'Turn on a Dime,Quickly reverse direction or position\n' +
    'Turn Someone Inside Out,To cause strong emotional turmoil; to completely change someone\n' +
    'Turn Something on Its Head,"Reverse something, cause something to be done in a new way"\n' +
    'Turn Turtle,"Capsize, turn over"\n' +
    'Turn the Corner,To begin to improve after a problem\n' +
    'Turn the Tables,Reverse a situation\n' +
    'Turnabout Is Fair Play,"If you suffer from the same suffering you have inflicted on others, that\'s only fair"\n' +
    'Twenty-Four Seven,At any time\n' +
    'Twist the Knife (in Deeper),Make someone\'s suffering worse\n' +
    'Twist the Knife (in Deeper),Make someone\'s suffering worse\n' +
    'Two a Penny,"Ordinary, inexpensive"\n' +
    'Two Peas in A Pod,Two people who are very similar in appearance\n' +
    'Thank God It\'s Friday (TGIF),Let\'s be happy that the workweek is over!\n' +
    'That Ship Has Sailed,That opportunity has passed.\n' +
    'That\'s Music to My Ears,I am very happy to hear this.\n' +
    'That\'s a Stretch,What you are suggesting is very difficult to believe; I am very skeptical\n' +
    'That\'s All She Wrote,That was the end of the story.\n' +
    'The Apple Never Falls Far From the Tree,Family characteristics are usually inherited\n' +
    'The Birds and the Bees,Human sexuality and reproduction\n' +
    'The Cat Is Out of the Bag,The secret has been revealed.\n' +
    'The Coast Is Clear,We are unobserved; it is safe to proceed.\n' +
    'The Cherry On the Cake,The final thing that makes something perfect\n' +
    'The Deck Is (The Cards Are),Stacked Against You Unfavorable conditions exist.\n' +
    'The Jig Is Up,A secret illicit activity has been exposed; your trickery is finished\n' +
    '"The More Things Change, The More They Stay The Same","Although something may seem superficially new, it has not altered the basic situation."\n' +
    'The Only Game in Town,The sole option for a particular service.\n' +
    'The Powers That Be,"People in charge, often used when the speaker does not want to identify them."\n' +
    'The Real McCoy,A genuine item\n' +
    'The Story Has Legs,People are continuing to pay attention to the story.\n' +
    'The Time is Ripe,"If you say that the time is ripe, you mean that it is a suitable point for a particular activity"\n' +
    'The Walls Have Ears We,may be overheard; be careful what you say\n' +
    'The Walls Have Ears,We may be overheard; be careful what you say\n' +
    'The Whole Enchilada,All of something.\n' +
    'The Whole Shebang,"Everything, all the parts of something"\n' +
    'The World Is Your Oyster,You have many opportunities and choices.\n' +
    'There But For The Grace Of God Go I,I could easily have done what that person did.\n' +
    'There\'s More Than One Way to Skin a Cat,There\'s more than one way of achieving a certain goal.\n' +
    'There\'s No Such Thing as a Free Lunch,Nothing is given to you without some expectation of something in return.\n' +
    'Thin On The Ground,"Rare, seldom encountered"\n' +
    'Think Big,Consider ambitious plans; avoid becoming overly concerned with details\n' +
    'Think Outside the Box,Try to solve a problem in an original way; think creatively\n' +
    'Think Tank,A group of experts engaged in ongoing studies of a particular subject; a policy study group\n' +
    'Think Tank,A group of experts engaged in ongoing studies of a particular subject; a policy study group\n' +
    'Third Rail,A topic so sensitive that it is dangerous to raise. This is especially used in political contexts\n' +
    'Third Time\'s a Charm,"Even if you fail at something twice, you may well succeed the third time."\n' +
    'Thirty-Thousand-Foot View,A very broad or general perspective\n' +
    'This Has (Person X) Written All Over It,[Person X] would really like or be well suited to this.\n' +
    'This Is Not Your Father\'s ____,This item has been much updated from its earlier versions.\n' +
    'Three Sheets to the Wind,Very drunk\n' +
    'Through the Grapevine,Via gossip\n' +
    'Through Thick and Thin,In good times and bad\n' +
    'Throw a Wet Blanket on (Something),Discourage plans for something\n' +
    'Throw a Wrench Into,To sabotage; to cause to fail\n' +
    'Throw Caution to the Wind,"To act in a daring way, without forethough"\n' +
    'Throw Down the Gauntlet,To issue a challenge\n' +
    'Throw Elbows,Be combative; be aggressive (physically or figuratively)\n' +
    'Throw in the Towel,"To give up, admit defeat"\n' +
    'Throw Someone for a Loop,Deeply surprise someone; catch someone off guard\n' +
    'Throw Someone Under the Bus,Sacrifice someone else\'s interests for your own personal gain\n' +
    'Throw the Baby Out with the Bath Water,Eliminate something good while discarding the bad parts of something\n' +
    'Throw the Baby Out with the Bath Water,To discard something valuable or important while disposing of something worthless\n' +
    'Throw The Book At,Prosecute legally as strongly as possible\n' +
    'Throw the Fight,"Intentionally lose a contest, usually in collusion with gamblers"\n' +
    'Throw the Game,"Intentionally lose a contest, usually in collusion with gamblers"\n' +
    'Throw the Match,"Intentionally lose a contest, usually in collusion with gamblers"\n' +
    'Thumbs-Up,Approval\n' +
    'Train Wreck,Anything that develops in a disastrous way\n' +
    'Trash Talk,Insults directed at one\'s opponent in a sporting event or contest\n' +
    'Tread Water,Maintain a current situation without improvement or decline\n' +
    'Trial Balloon,A test of someone\'s or the public\'s reaction\n' +
    'Trip the Light Fantastic,Dance well; do ballroom dancing\n' +
    'U Turn,"A complete change of opinion, direction, etc."\n' +
    'Ugly Duckling,An awkward child or young person who grows into a beautiful person\n' +
    'Under (Below) the Radar,"Not generally perceived, below popular consciousness"\n' +
    'Under Someone\'s Spell,"Fascinated, entranced by someone"\n' +
    'Under the Impression,"Believing something, perhaps mistakenly"\n' +
    'Under the Table,Without being officially recorded\n' +
    'Under the Weather,Feeling ill\n' +
    'Under the Weather,Not feeling well\n' +
    'Under Wraps,"Temporarily hidden, secret"\n' +
    'University of Life,"Difficult real-life experience, as opposed to formal education"\n' +
    'Until the Cows Come Home,For a long time\n' +
    'Until You\'re Blue in the Face,For a long time with no results\n' +
    'Up a Creek,In a very bad situation\n' +
    'Up for Grabs,Available\n' +
    'Up for Grabs,Available for anyone\n' +
    'Up in Arms,"Angry, protesting (usually said of a group)"\n' +
    'Up in the Air,Not yet decided\n' +
    'Up to One\'s Neck,Nearly overwhelmed\n' +
    'Up to Scratch,Meeting a basic standard of competence or quality\n' +
    'Up to Snuff,Meeting a basic standard\n' +
    'Up the Ante,Raise the stakes; increase the importance of something under discussion\n' +
    'Up the Duff,Pregnant\n' +
    'Upset the Apple Cart,"To disorganize or spoil something, especially an established arrangement or plan"\n' +
    'Use One\'s Head,"To think, to have common sense"\n' +
    'Vale of Tears,"The world in general, envisioned as a sad place; the tribulations of life"\n' +
    'Vicious Circle,A situation in which an attempt to solve a problem makes the original problem worse.\n' +
    'Victory Lap,Visible public appearances after a victory or accomplishment\n' +
    'Virgin Territory,"Something that has never been explored, physically or intellectually"\n' +
    'Vote with One\'s Feet,To physically depart from something as a way of showing disapproval\n' +
    'Waiting in the Wings,"Ready to assume responsibilities but not yet active, ready to become a successor"\n' +
    'Waka-Jumping,Change political parties (said of politicians themselves)\n' +
    'Wake Up and Smell the Coffee,Stop deluding yourself\n' +
    'Wake Up on the Wrong Side of the Bed,Be grumpy or ill-humored. Generally used in past tense\n' +
    'Walk on Eggshells,To have to act very sensitively in order to avoid offending someone\n' +
    'Walk the Plank,Be forced to resign a position\n' +
    'Wandering Eye,A tendency to look at and desire women or men other than one\'s committed romantic partner\n' +
    'Wandering Eye,A tendency to look at and desire women or men other than one\'s committed romantic partner\n' +
    'Wash Your Hands of (Something),Decline to take further responsibility; refuse to be involved with something anymore\n' +
    'Water Under the Bridge,Something in the past that\'s no longer worth worrying about\n' +
    'Watering Hole,"A place where alcoholic beverages are served, a bar"\n' +
    'Weekend Warrior,Someone who has an office job but enjoys contact sports on weekends; a member of a military reserve force (whose exercises are typically on weekends)\n' +
    'We\'ll Cross That Bridge,When We Come to It We\'ll deal with that problem if and when it comes up\n' +
    'Welsh (Welch) on a Deal,Not observe the terms of an agreement\n' +
    'Wet Behind the Ears,"inexperienced, immature, new to something"\n' +
    'Wet Behind the Ears,"Inexperienced, immature, new to something"\n' +
    'Wet Blanket,Someone who dampens a festive occasion\n' +
    'Wet Your Whistle,Drink something\n' +
    'What Do You Make of (Him)?,What is your evaluation of this person?\n' +
    'What Goes Around Comes Around,The kind of treatment you give to others will eventually return to you; things go in cycles\n' +
    'What\'s Good for the Goose Is Good for the Gander,"What\'s OK for a man is OK for a woman, too"\n' +
    'When Hell Freezes Over,Never\n' +
    '"When In Doubt, Leave It Out","When unsure about something, omit it."\n' +
    '"When in Rome, Do as the Romans Do","When you visit a new place, follow the customs of the people there"\n' +
    '"When It Rains, It Pours",Problems tend to come in groups.\n' +
    'When Pigs Fly,Never\n' +
    'When the Chips Are Down,When a situation becomes urgent or difficult\n' +
    'Where (When) the Rubber,Meets the Road In reality; where an idea meets a real-world test\n' +
    '"Where There\'s a Will, There\'s a Way","If you have a strong desire to accomplish something, you will achieve it even in the face of considerable odds."\n' +
    '"Where There\'s Smoke, There\'s Fire","If there is typical evidence of something, the most likely explanation is that it is actually occurring."\n' +
    'Whisper Sweet Nothings (in Someone\'s Ear),Speak meaningless romantic utterances\n' +
    'Whistle in the Dark,To be unrealistically confident or brave; to talk about something of which one has little knowledge\n' +
    'Whistle Past the Graveyard,Remain optimistic despite dangers; be clueless\n' +
    'Whistling Dixie,Being unrealistically optimistic\n' +
    'White Elephant,An unwanted item that is difficult to sell or dispose of\n' +
    '"Who\'s She, the Cat\'s Mother?",Why does she have such a high opinion of herself?\n' +
    'Wild Goose Chase,An impossible or futile search or task\n' +
    'Window Dressing,A misleading disguise intended to present a favorable impression\n' +
    'Window Shop,To look at merchandise in a store without intending to buy it\n' +
    'Witch Hunt,An organized attempt to persecute an unpopular group of people and blame them for a problem.\n' +
    'With Bells On,"Eagerly, willingly, and on time."\n' +
    'Work One\'s Fingers to the Bone,Work very hard over an extended period\n' +
    'Worn to a Frazzle,"Exhausted, completely worn out"\n' +
    'Wouldn\'t Be Caught Dead,Would absolutely not allow myself to do this\n' +
    'Writing (Handwriting) on the Wall,Hints of coming disaster\n' +
    '"Year In, Year Out",Annually without change\n' +
    '"You Can Lead a Horse to Water, but You Can\'t Make It Drink",It\'s very hard to force someone to do something against his or her will.\n' +
    'You Can Say That Again!,I agree totally!\n' +
    'You Can Take It to the Bank,I absolutely guarantee this\n' +
    'You Can\'t Judge a Book by Its Cover,You can\'t know people (or things) well by their external appearances.\n' +
    'You Can\'t Make an Omelet (Omelette),Without Breaking\n' +
    'You Can\'t Make Fish of One and Fowl of the Other,People must be treated equally.\n' +
    'You Know the Drill,You are already familiar with the procedure.\n' +
    '"You Snooze, You Lose","If you delay or are not alert, you will miss opportunities"\n' +
    'Young at Heart,"Having a youthful outlook, regardless of age"\n' +
    'Your Guess Is as Good as Mine,I don\'t know; I have no idea\n' +
    'Your Mileage May Vary,"You may get different results. This does not necessarily refer to a car, although it may."\n' +
    'Your Number Is Up,You are going to die (or suffer some bad misfortune or setback)\n' +
    'You\'re Driving Me Nuts,To make someone giddy or crazy\n' +
    'Yours Truly,Me\n' +
    'Zero In On,Focus closely on something; take aim at something\n' +
    'Zig When One Should Be Zagging,To make an error; to choose an incorrect course\n' +
    'Zip One\'s Lip,Be quiet\n ';
