--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: habitats; Type: TABLE; Schema: public;
--

CREATE TABLE public.habitats (
    name text NOT NULL,
    description text
);

--
-- Name: pokehabitats; Type: TABLE; Schema: public; 
--

CREATE TABLE public.pokehabitats (
    habitat text NOT NULL,
    pokemon text NOT NULL
);


--
-- Name: pokemon; Type: TABLE; Schema: public; 
--

CREATE TABLE public.pokemon (
    id integer NOT NULL,
    name text,
    species text,
    title text,
    flavor_text text,
    catch_rate integer,
    sprite text
);


--
-- Data for Name: habitats; Type: TABLE DATA; Schema: public; 
--

COPY public.habitats (name, description) FROM stdin;
sea	The sounds of the sea are waves occasionally lapping the beach.
field	A grassy field dotted here and there with trees.
mountain	A mountain range rises above, with a single beaten path ascending to the peak.
pond	A series of ponds scattered here and there are all that marks the area.
forest	Light barely reaches the bottom of this dense forest.
\.


--
-- Data for Name: pokehabitats; Type: TABLE DATA; Schema: public;
--

COPY public.pokehabitats (habitat, pokemon) FROM stdin;
forest	caterpie
forest	metapod
forest	butterfree
forest	weedle
forest	kakuna
forest	beedrill
forest	ekans
forest	arbok
forest	pikachu
forest	raichu
forest	oddish
forest	gloom
forest	vileplume
forest	paras
forest	parasect
forest	venonat
forest	venomoth
forest	bellsprout
forest	weepinbell
forest	victreebel
forest	gastly
forest	haunter
forest	gengar
forest	drowzee
forest	hypno
forest	exeggcute
forest	exeggutor
forest	tangela
forest	pinsir
forest	mew
forest	hoothoot
forest	noctowl
forest	natu
forest	xatu
forest	bellossom
forest	aipom
forest	murkrow
forest	misdreavus
forest	unown
forest	pineco
forest	forretress
forest	dunsparce
forest	heracross
forest	teddiursa
forest	ursaring
forest	celebi
forest	treecko
forest	grovyle
forest	sceptile
forest	wurmple
forest	silcoon
forest	beautifly
forest	cascoon
forest	dustox
forest	seedot
forest	nuzleaf
forest	shiftry
forest	shroomish
forest	breloom
forest	slakoth
forest	vigoroth
forest	slaking
forest	nincada
forest	ninjask
forest	shedinja
forest	gulpin
forest	swalot
forest	seviper
forest	kecleon
forest	shuppet
forest	banette
forest	duskull
forest	dusclops
forest	tropius
forest	turtwig
forest	grotle
forest	torterra
forest	kricketot
forest	kricketune
forest	burmy
forest	wormadam
forest	mothim
forest	combee
forest	vespiquen
forest	pachirisu
forest	buizel
forest	drifblim
forest	mismagius
forest	honchkrow
forest	croagunk
forest	tangrowth
forest	dusknoir
forest	cresselia
field	bulbasaur
field	ivysaur
field	venusaur
field	charmander
field	charmeleon
field	charizard
field	pidgey
field	pidgeotto
field	pidgeot
field	rattata
field	raticate
field	spearow
field	fearow
field	nidoran-f
field	nidorina
field	nidoqueen
field	nidoran-m
field	nidorino
field	nidoking
field	vulpix
field	ninetales
field	jigglypuff
field	wigglytuff
field	meowth
field	persian
field	growlithe
field	arcanine
field	abra
field	kadabra
field	alakazam
field	ponyta
field	rapidash
field	farfetchd
field	doduo
field	dodrio
field	grimer
field	muk
field	voltorb
field	electrode
field	lickitung
field	chansey
field	kangaskhan
field	mr-mime
field	scyther
field	jynx
field	tauros
field	ditto
field	eevee
field	vaporeon
field	jolteon
field	flareon
field	porygon
field	snorlax
field	mewtwo
field	chikorita
field	bayleef
field	meganium
field	cyndaquil
field	quilava
field	typhlosion
field	sentret
field	furret
field	ledyba
field	ledian
field	spinarak
field	ariados
field	pichu
field	cleffa
field	igglybuff
field	togepi
field	togetic
field	mareep
field	flaaffy
field	ampharos
field	hoppip
field	skiploom
field	jumpluff
field	sunkern
field	sunflora
field	yanma
field	espeon
field	umbreon
field	wobbuffet
field	girafarig
field	snubbull
field	granbull
field	scizor
field	porygon2
field	stantler
field	smeargle
field	smoochum
field	miltank
field	blissey
field	torchic
field	combusken
field	blaziken
field	poochyena
field	mightyena
field	zigzagoon
field	linoone
field	taillow
field	swellow
field	ralts
field	kirlia
field	gardevoir
field	skitty
field	delcatty
field	electrike
field	manectric
field	plusle
field	minun
field	roselia
field	spoink
field	grumpig
field	spinda
field	swablu
field	altaria
field	zangoose
field	castform
field	wynaut
field	latias
field	latios
field	rayquaza
field	chimchar
field	monferno
field	infernape
field	starly
field	staravia
field	staraptor
field	bidoof
field	bibarel
field	shinx
field	luxio
field	luxray
field	budew
field	roserade
field	cherrim
field	buneary
field	lopunny
field	glameow
field	purugly
field	chingling
field	bonsly
field	mime-jr
field	happiny
field	chatot
field	spiritomb
field	riolu
field	lucario
field	hippopotas
field	lickilicky
field	togekiss
field	yanmega
field	leafeon
field	glaceon
field	porygon-z
field	gallade
field	rotom
field	uxie
field	mesprit
field	azelf
field	shaymin
mountain	sandshrew
mountain	sandslash
mountain	clefairy
mountain	clefable
mountain	zubat
mountain	golbat
mountain	diglett
mountain	dugtrio
mountain	mankey
mountain	primeape
mountain	machop
mountain	machoke
mountain	machamp
mountain	geodude
mountain	graveler
mountain	golem
mountain	magnemite
mountain	magneton
mountain	onix
mountain	cubone
mountain	marowak
mountain	hitmonlee
mountain	hitmonchan
mountain	koffing
mountain	weezing
mountain	rhyhorn
mountain	rhydon
mountain	electabuzz
mountain	magmar
mountain	aerodactyl
mountain	articuno
mountain	zapdos
mountain	moltres
mountain	dragonite
mountain	feraligatr
mountain	crobat
mountain	sudowoodo
mountain	gligar
mountain	steelix
mountain	sneasel
mountain	slugma
mountain	magcargo
mountain	swinub
mountain	piloswine
mountain	delibird
mountain	skarmory
mountain	houndour
mountain	houndoom
mountain	phanpy
mountain	donphan
mountain	tyrogue
mountain	hitmontop
mountain	elekid
mountain	magby
mountain	raikou
mountain	entei
mountain	suicune
mountain	larvitar
mountain	pupitar
mountain	tyranitar
mountain	lugia
mountain	ho-oh
mountain	whismur
mountain	loudred
mountain	exploud
mountain	makuhita
mountain	hariyama
mountain	nosepass
mountain	sableye
mountain	mawile
mountain	aron
mountain	lairon
mountain	aggron
mountain	meditite
mountain	medicham
mountain	volbeat
mountain	illumise
mountain	numel
mountain	camerupt
mountain	torkoal
mountain	trapinch
mountain	vibrava
mountain	flygon
mountain	cacnea
mountain	cacturne
mountain	lunatone
mountain	solrock
mountain	baltoy
mountain	claydol
mountain	chimecho
mountain	absol
mountain	snorunt
mountain	glalie
mountain	bagon
mountain	shelgon
mountain	salamence
mountain	beldum
mountain	metang
mountain	metagross
mountain	regirock
mountain	regice
mountain	registeel
mountain	groudon
mountain	jirachi
mountain	deoxys
mountain	cranidos
mountain	rampardos
mountain	shieldon
mountain	bastiodon
mountain	floatzel
mountain	cherubi
mountain	stunky
mountain	skuntank
mountain	bronzor
mountain	bronzong
mountain	gible
mountain	gabite
mountain	toxicroak
mountain	carnivine
mountain	finneon
mountain	lumineon
mountain	mantyke
mountain	snover
mountain	abomasnow
mountain	weavile
mountain	magnezone
mountain	rhyperior
mountain	electivire
mountain	magmortar
mountain	gliscor
mountain	mamoswine
mountain	probopass
mountain	froslass
mountain	dialga
mountain	palkia
mountain	heatran
mountain	regigigas
mountain	giratina
mountain	darkrai
mountain	arceus
pond	squirtle
pond	wartortle
pond	blastoise
pond	psyduck
pond	golduck
pond	poliwag
pond	poliwhirl
pond	poliwrath
pond	slowpoke
pond	slowbro
pond	goldeen
pond	seaking
pond	magikarp
pond	gyarados
pond	dratini
pond	dragonair
pond	totodile
pond	croconaw
pond	marill
pond	azumarill
pond	politoed
pond	wooper
pond	quagsire
pond	slowking
pond	mudkip
pond	marshtomp
pond	swampert
pond	lotad
pond	lombre
pond	ludicolo
pond	surskit
pond	masquerain
pond	azurill
pond	barboach
pond	whiscash
pond	corphish
pond	crawdaunt
pond	piplup
pond	prinplup
pond	empoleon
pond	ambipom
pond	drifloon
pond	garchomp
pond	munchlax
sea	tentacool
sea	tentacruel
sea	seel
sea	dewgong
sea	shellder
sea	cloyster
sea	krabby
sea	kingler
sea	horsea
sea	seadra
sea	staryu
sea	starmie
sea	lapras
sea	omanyte
sea	omastar
sea	kabuto
sea	kabutops
sea	chinchou
sea	lanturn
sea	qwilfish
sea	shuckle
sea	corsola
sea	remoraid
sea	octillery
sea	mantine
sea	kingdra
sea	wingull
sea	pelipper
sea	carvanha
sea	sharpedo
sea	wailmer
sea	wailord
sea	lileep
sea	cradily
sea	anorith
sea	armaldo
sea	feebas
sea	milotic
sea	spheal
sea	sealeo
sea	walrein
sea	clamperl
sea	huntail
sea	gorebyss
sea	relicanth
sea	luvdisc
sea	kyogre
sea	shellos
sea	gastrodon
sea	hippowdon
sea	skorupi
sea	drapion
sea	phione
sea	manaphy
\.


--
-- Data for Name: pokemon; Type: TABLE DATA; Schema: public; 
--

COPY public.pokemon (id, name, species, title, flavor_text, catch_rate, sprite) FROM stdin;
10	caterpie	Caterpie	Worm Pokémon	Perhaps because it would like to grow up\nquickly, it has a voracious appetite, eating\na hundred leaves a day.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png
11	metapod	Metapod	Cocoon Pokémon	Its shell is filled with a thick liquid. All of the\ncells throughout its body are being rebuilt in\npreparation for evolution.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png
12	butterfree	Butterfree	Butterfly Pokémon	Its wings are covered in toxic scales. If it finds\nbird Pokémon going after Caterpie, Butterfree\nsprinkles its scales on them to drive them off.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png
13	weedle	Weedle	Hairy Bug Pokémon	Weedle has an extremely acute sense of smell. It is capable\nof distinguishing its favorite kinds of leaves from those it\ndislikes just by sniffing with its big red proboscis (nose).	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png
14	kakuna	Kakuna	Cocoon Pokémon	Kakuna remains virtually immobile as it clings to a tree.\nHowever, on the inside, it is extremely busy as it prepares\nfor its coming evolution.\nThis is evident from how hot the shell becomes to the touch.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png
15	beedrill	Beedrill	Poison Bee Pokémon	Beedrill is extremely territorial. No one should ever approach\nits nest—this is for their own safety. If angered, they will attack\nin a furious swarm.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png
23	ekans	Ekans	Snake Pokémon	By dislocating its jaw, it can swallow prey larger\nthan itself. After a meal, it curls up and rests.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png
24	arbok	Arbok	Cobra Pokémon	The latest research has determined that there\nare over 20 possible arrangements of the\npatterns on its stomach.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png
25	pikachu	Pikachu	Mouse Pokémon	Its nature is to store up electricity. Forests\nwhere nests of Pikachu live are dangerous,\nsince the trees are so often struck by lightning.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
26	raichu	Raichu	Mouse Pokémon	As electricity builds up inside its body, it\nbecomes more aggressive. One theory is that\nthe electricity buildup is actually causing stress.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png
43	oddish	Oddish	Weed Pokémon	Oddish searches for fertile, nutrient-rich soil, then plants itself.\nDuring the daytime, while it is planted, this Pokémon’s feet\nare thought to change shape and become similar to the roots\nof trees.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png
44	gloom	Gloom	Weed Pokémon	From its mouth Gloom drips honey that smells absolutely\nhorrible. Apparently, it loves the horrid stench. It sniffs the\nnoxious fumes and then drools even more of its honey.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png
45	vileplume	Vileplume	Flower Pokémon	Vileplume has the world’s largest petals. They are used to\nattract prey that are then doused with toxic spores. Once the\nprey are immobilized, this Pokémon catches and devours them.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png
46	paras	Paras	Mushroom Pokémon	Whether it’s due to a lack of moisture or a lack\nof nutrients, in Alola the mushrooms on Paras\ndon’t grow up quite right.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png
47	parasect	Parasect	Mushroom Pokémon	The bug is mostly dead, with the mushroom on\nits back having become the main body. If the\nmushroom comes off, the bug stops moving.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png
48	venonat	Venonat	Insect Pokémon	Venonat is said to have evolved with a coat of thin, stiff hair\nthat covers its entire body for protection. It possesses large\neyes that never fail to spot even minuscule prey.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png
49	venomoth	Venomoth	Poison Moth Pokémon	Venomoth is nocturnal—it is a Pokémon that only becomes\nactive at night. Its favorite prey are small insects that gather\naround streetlights, attracted by the light in the darkness.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png
69	bellsprout	Bellsprout	Flower Pokémon	Bellsprout’s thin and flexible body lets it bend and sway\nto avoid any attack, however strong it may be. From its mouth,\nthis Pokémon spits a corrosive fluid that melts even iron.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png
70	weepinbell	Weepinbell	Flycatcher Pokémon	Weepinbell has a large hook on its rear end. At night, the\nPokémon hooks on to a tree branch and goes to sleep.\nIf it moves around in its sleep, it may wake up to find itself\non the ground.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png
71	victreebel	Victreebel	Flycatcher Pokémon	Victreebel has a long vine that extends from its head.\nThis vine is waved and flicked about as if it were an animal\nto attract prey. When an unsuspecting prey draws near,\nthis Pokémon swallows it whole.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png
92	gastly	Gastly	Gas Pokémon	It’s said that gas emanating from a graveyard\nwas possessed by the grievances of the\ndeceased and thus became a Pokémon.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png
93	haunter	Haunter	Gas Pokémon	On moonless nights, Haunter searches for\nsomeone to curse, so it’s best not to go out\nwalking around.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png
94	gengar	Gengar	Shadow Pokémon	You can hear tales told all over the world about\nhow Gengar will pay a visit to children who\nare naughty.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png
96	drowzee	Drowzee	Hypnosis Pokémon	It can be spotted near recreational facilities,\nintending to eat the pleasant dreams of children\nwho enjoyed themselves there that day.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png
97	hypno	Hypno	Hypnosis Pokémon	In Alola, Komala is Hypno’s main target. It rarely\nharms people.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png
102	exeggcute	Exeggcute	Egg Pokémon	Six of them form a single Pokémon. Should one\nof the six be lost, the next morning there will\nonce more be six.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png
103	exeggutor	Exeggutor	Coconut Pokémon	It engages its enemies using psychic powers.\nEach of its three heads fires off psychokinetic\nenergy, tripling its power.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png
114	tangela	Tangela	Vine Pokémon	Tangela’s vines snap off easily if they are grabbed. This\nhappens without pain, allowing it to make a quick getaway.\nThe lost vines are replaced by newly grown vines the very\nnext day.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png
127	pinsir	Pinsir	Stag Beetle Pokémon	It gets into territorial disputes with Vikavolt.\nFor some reason, it apparently gets along well\nwith Heracross in Alola.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png
151	mew	Mew	New Species Pokémon	Mew is said to possess the genetic composition of all\nPokémon. It is capable of making itself invisible at will,\nso it entirely avoids notice even if it approaches people.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png
163	hoothoot	Hoothoot	Owl Pokémon	Every day, it tilts its head in the same rhythm.\nA long time ago, people raised these Pokémon\nto serve as clocks.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png
164	noctowl	Noctowl	Owl Pokémon	With eyes that can see in pitch-darkness, it\nnever lets its prey escape. Some even call it\n“the emperor of dark nights.”	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png
177	natu	Natu	Tiny Bird Pokémon	Although it still can’t fly, its jumping power is\noutstanding. It jumps way up into trees and\nplucks the buds from the branches.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png
178	xatu	Xatu	Mystic Pokémon	It’s said that while this Pokémon has the power\nto predict the future, it’s not powerful enough\nto change the future it sees.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png
182	bellossom	Bellossom	Flower Pokémon	A Bellossom grows flowers more beautifully if it has evolved\nfrom a smelly Gloom—the more stinky the better. At night, this\nPokémon closes its petals and goes to sleep.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png
190	aipom	Aipom	Long Tail Pokémon	As it did more and more with its tail, its hands\nbecame clumsy. It makes its nest high in\nthe treetops.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png
198	murkrow	Murkrow	Darkness Pokémon	It has a weakness for shiny things. It’s been\nknown to sneak into the nests of Gabite—noted\ncollectors of jewels—in search of treasure.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png
200	misdreavus	Misdreavus	Screech Pokémon	What gives meaning to its life is surprising\nothers. If you set your ear against the red orbs\naround its neck, you can hear shrieking.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png
201	unown	Unown	Symbol Pokémon	This Pokémon is shaped like ancient writing. It is a mystery as\nto which came first, the ancient writings or the various Unown.\nResearch into this topic is ongoing but nothing is known.	225	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png
204	pineco	Pineco	Bagworm Pokémon	Motionless, it hangs from trees, waiting for\nits bug Pokémon prey to come to it. Its favorite\nin Alola is Cutiefly.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png
205	forretress	Forretress	Bagworm Pokémon	When something approaches it, it fires off\nfragments of its steel shell in attack. This is not\na conscious action but a conditioned reflex.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png
206	dunsparce	Dunsparce	Land Snake Pokémon	It travels by digging through the ground.\nDiglett and Dunsparce share one another’s\ntunnels happily.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png
214	heracross	Heracross	Single Horn Pokémon	It’s proud of its thick horn. In Alola, its biggest\nrival is Vikavolt, which it’s always fighting with.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png
216	teddiursa	Teddiursa	Little Bear Pokémon	This Pokémon likes to lick its palms that are sweetened by\nbeing soaked in honey. Teddiursa concocts its own honey\nby blending fruits and pollen collected by Beedrill.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png
217	ursaring	Ursaring	Hibernator Pokémon	In the forests inhabited by Ursaring, it is said that there are\nmany streams and towering trees where they gather food. This\nPokémon walks through its forest gathering food every day.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png
251	celebi	Celebi	Time Travel Pokémon	This Pokémon came from the future by crossing over time.\nIt is thought that so long as Celebi appears, a bright and\nshining future awaits us.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png
252	treecko	Treecko	Wood Gecko Pokémon	Treecko is cool, calm, and collected—it never panics under\nany situation. If a bigger foe were to glare at this Pokémon,\nit would glare right back without conceding an inch of ground.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png
253	grovyle	Grovyle	Wood Gecko Pokémon	This Pokémon adeptly flies from branch to branch in trees.\nIn a forest, no Pokémon can ever hope to catch a fleeing\nGrovyle however fast they may be.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png
254	sceptile	Sceptile	Forest Pokémon	Sceptile has seeds growing on its back. They are said to be\nbursting with nutrients that revitalize trees. This Pokémon\nraises the trees in a forest with loving care.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png
265	wurmple	Wurmple	Worm Pokémon	Wurmple is targeted by Swellow as prey. This Pokémon\nwill try to resist by pointing the spikes on its rear at the\nattacking predator. It will weaken the foe by leaking poison\nfrom the spikes.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png
266	silcoon	Silcoon	Cocoon Pokémon	Silcoon was thought to endure hunger and not consume\nanything before its evolution. However, it is now thought\nthat this Pokémon slakes its thirst by drinking rainwater\nthat collects on its silk.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png
267	beautifly	Beautifly	Butterfly Pokémon	Beautifly has a long mouth like a coiled needle, which is very\nconvenient for collecting pollen from flowers. This Pokémon\nrides the spring winds as it flits around gathering pollen.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png
268	cascoon	Cascoon	Cocoon Pokémon	If it is attacked, Cascoon remains motionless however badly it\nmay be hurt. It does so because if it were to move, its body\nwould be weak upon evolution. This Pokémon will also not\nforget the pain it endured.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png
269	dustox	Dustox	Poison Moth Pokémon	When Dustox flaps its wings, a fine dust is scattered all over.\nThis dust is actually a powerful poison that will even make a\npro wrestler sick. This Pokémon searches for food using its\nantennae like radar.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png
273	seedot	Seedot	Acorn Pokémon	Seedot looks exactly like an acorn when it is dangling from a\ntree branch. It startles other Pokémon by suddenly moving.\nThis Pokémon polishes its body once a day using leaves.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png
274	nuzleaf	Nuzleaf	Wily Pokémon	This Pokémon pulls out the leaf on its head and makes a flute\nwith it. The sound of Nuzleaf’s flute strikes fear and uncertainty\nin the hearts of people lost in a forest.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png
275	shiftry	Shiftry	Wicked Pokémon	Shiftry’s large fans generate awesome gusts of wind at a\nspeed close to 100 feet per second. The whipped-up wind\nblows anything away. This Pokémon chooses to live quietly\ndeep in forests.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png
285	shroomish	Shroomish	Mushroom Pokémon	If Shroomish senses danger, it shakes its body and scatters\nspores from the top of its head. This Pokémon’s spores are\nso toxic, they make trees and weeds wilt.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png
286	breloom	Breloom	Mushroom Pokémon	The seeds ringing Breloom’s tail are made of hardened toxic\nspores. It is horrible to eat the seeds. Just taking a bite of this\nPokémon’s seed will cause your stomach to rumble.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png
287	slakoth	Slakoth	Slacker Pokémon	Slakoth’s heart beats just once a minute. Whatever happens,\nit is content to loaf around motionless. It is rare to see this\nPokémon in motion.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png
288	vigoroth	Vigoroth	Wild Monkey Pokémon	Vigoroth is simply incapable of remaining still. Even when it\ntries to sleep, the blood in its veins grows agitated, compelling\nthis Pokémon to run wild throughout the jungle before it can\nsettle down.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png
289	slaking	Slaking	Lazy Pokémon	Wherever Slaking live, rings of over a yard in diameter appear\nin grassy fields. They are made by the Pokémon as it eats all\nthe grass within reach while lying prone on the ground.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png
290	nincada	Nincada	Trainee Pokémon	Nincada lives underground. It uses its sharp claws to carve the\nroots of trees and absorb moisture and nutrients.\nThis Pokémon can’t withstand bright sunlight so avoids it.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png
291	ninjask	Ninjask	Ninja Pokémon	If Ninjask is not trained properly, it will refuse to obey\nthe Trainer and cry loudly continuously. Because of this\nquality, this Pokémon is said to be one that puts the\nTrainer’s abilities to the test.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png
292	shedinja	Shedinja	Shed Pokémon	Shedinja is a peculiar Pokémon. It seems to appear unsought\nin a Poké Ball after a Nincada evolves. This bizarre Pokémon\nis entirely immobile—it doesn’t even breathe.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png
316	gulpin	Gulpin	Stomach Pokémon	Most of Gulpin’s body is made up of its stomach—its heart and\nbrain are very small in comparison. This Pokémon’s stomach\ncontains special enzymes that dissolve anything.	225	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png
317	swalot	Swalot	Poison Bag Pokémon	Swalot has no teeth, so what it eats, it swallows whole, no\nmatter what. Its cavernous mouth yawns widely. An automobile\ntire could easily fit inside this Pokémon’s mouth.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png
336	seviper	Seviper	Fang Snake Pokémon	Seviper’s swordlike tail serves two purposes—it slashes foes\nand douses them with secreted poison. This Pokémon will not\ngive up its long-running blood feud with Zangoose.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png
352	kecleon	Kecleon	Color Swap Pokémon	It changes its hue to blend into its surroundings.\nIf no one takes notice of it for too long, it will\npout and never reveal itself.	200	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png
353	shuppet	Shuppet	Puppet Pokémon	It eats up emotions like malice, jealousy, and\nresentment, so some people are grateful for\nits presence.	225	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png
354	banette	Banette	Marionette Pokémon	It’s a stuffed toy that was thrown away and\nbecame possessed, ever searching for the one\nwho threw it away so it can exact its revenge.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png
355	duskull	Duskull	Requiem Pokémon	Duskull wanders lost among the deep darkness of midnight.\nThere is an oft-told admonishment given to misbehaving\nchildren that this Pokémon will spirit away bad children who\nearn scoldings from their mothers.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png
356	dusclops	Dusclops	Beckon Pokémon	Dusclops absorbs anything, however large the object may be.\nThis Pokémon hypnotizes its foe by waving its hands in a\nmacabre manner and by bringing its single eye to bear.\nThe hypnotized foe is made to do Dusclops’s bidding.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png
357	tropius	Tropius	Fruit Pokémon	The bunches of fruit growing around the necks\nof Tropius in Alola are especially sweet\ncompared to those in other regions.	200	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png
387	turtwig	Turtwig	Tiny Leaf Pokémon	It undertakes photosynthesis with its body, making\noxygen. The leaf on its head wilts if it is thirsty.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png
388	grotle	Grotle	Grove Pokémon	It knows where pure water wells up. It carries fellow\nPokémon there on its back.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png
389	torterra	Torterra	Continent Pokémon	Small Pokémon occasionally gather on its unmoving\nback to begin building their nests.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png
401	kricketot	Kricketot	Cricket Pokémon	When its antennae hit each other, it sounds like the\nmusic of a xylophone.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png
402	kricketune	Kricketune	Cricket Pokémon	It signals its emotions with its melodies. Scientists\nare studying these melodic patterns.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png
412	burmy	Burmy	Bagworm Pokémon	If its cloak is broken in battle, it quickly remakes\nthe cloak with materials nearby.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png
413	wormadam	Wormadam	Bagworm Pokémon	When Burmy evolved, its cloak became a part of\nthis Pokémon’s body. The cloak is never shed.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png
414	mothim	Mothim	Moth Pokémon	It flutters around at night and steals honey from\nthe Combee hive.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png
415	combee	Combee	Tiny Bee Pokémon	It collects and delivers honey to its colony.\nAt night, they cluster to form a beehive and sleep.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png
416	vespiquen	Vespiquen	Beehive Pokémon	Its abdomen is a honeycomb for grubs. It raises its\ngrubs on honey collected by Combee.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png
417	pachirisu	Pachirisu	EleSquirrel Pokémon	A pair may be seen rubbing their cheek pouches\ntogether in an effort to share stored electricity.	200	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png
418	buizel	Buizel	Sea Weasel Pokémon	It inflates the flotation sac around its neck and\npokes its head out of the water to see what is\ngoing on.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png
426	drifblim	Drifblim	Blimp Pokémon	There’s a rumor that if you catch a Drifblim\nfloating on the wind at dusk, you’ll be carried\naway to the afterlife.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png
429	mismagius	Mismagius	Magical Pokémon	Feared for its wrath and the curses it spreads,\nthis Pokémon will also, on a whim, cast spells\nthat help people.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png
430	honchkrow	Honchkrow	Big Boss Pokémon	It will absolutely not forgive failure from or\nbetrayal by its goons. It has no choice in this\nif it wants to maintain the order of the flock.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png
453	croagunk	Croagunk	Toxic Mouth Pokémon	Inflating its poison sacs, it fills the area with an odd\nsound and hits flinching opponents with a\npoison jab.	140	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png
465	tangrowth	Tangrowth	Vine Pokémon	Its vines grow so profusely that, in the warm\nseason, you can’t even see its eyes.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png
477	dusknoir	Dusknoir	Gripper Pokémon	The antenna on its head captures radio waves from\nthe world of spirits that command it to take\npeople there.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png
488	cresselia	Cresselia	Lunar Pokémon	Those who sleep holding Cresselia’s feather are\nassured of joyful dreams. It is said to represent\nthe crescent moon.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png
1	bulbasaur	Bulbasaur	Seed Pokémon	Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
2	ivysaur	Ivysaur	Seed Pokémon	There is a bud on this Pokémon’s back. To support its weight,\nIvysaur’s legs and trunk grow thick and strong.\nIf it starts spending more time lying in the sunlight,\nit’s a sign that the bud will bloom into a large flower soon.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png
3	venusaur	Venusaur	Seed Pokémon	There is a large flower on Venusaur’s back. The flower is said\nto take on vivid colors if it gets plenty of nutrition and sunlight.\nThe flower’s aroma soothes the emotions of people.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png
4	charmander	Charmander	Lizard Pokémon	The flame that burns at the tip of its tail is an indication\nof its emotions. The flame wavers when Charmander\nis enjoying itself. If the Pokémon becomes enraged,\nthe flame burns fiercely.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png
5	charmeleon	Charmeleon	Flame Pokémon	Charmeleon mercilessly destroys its foes using its sharp\nclaws. If it encounters a strong foe, it turns aggressive.\nIn this excited state, the flame at the tip of its tail flares with\na bluish white color.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png
6	charizard	Charizard	Flame Pokémon	Charizard flies around the sky in search of powerful opponents.\nIt breathes fire of such great heat that it melts anything.\nHowever, it never turns its fiery breath on any opponent\nweaker than itself.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png
16	pidgey	Pidgey	Tiny Bird Pokémon	Pidgey has an extremely sharp sense of direction.\nIt is capable of unerringly returning home to its nest,\nhowever far it may be removed from its familiar surroundings.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png
17	pidgeotto	Pidgeotto	Bird Pokémon	Pidgeotto claims a large area as its own territory. This\nPokémon flies around, patrolling its living space. If its territory\nis violated, it shows no mercy in thoroughly punishing the foe\nwith its sharp claws.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png
18	pidgeot	Pidgeot	Bird Pokémon	This Pokémon has a dazzling plumage of beautifully\nglossy feathers. Many Trainers are captivated by the\nstriking beauty of the feathers on its head, compelling\nthem to choose Pidgeot as their Pokémon.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png
19	rattata	Rattata	Mouse Pokémon	Its incisors grow continuously throughout its life.\nIf its incisors get too long, this Pokémon\nbecomes unable to eat, and it starves to death.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png
20	raticate	Raticate	Mouse Pokémon	People say that it fled from its enemies by\nusing its small webbed hind feet to swim\nfrom island to island in Alola.	127	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png
21	spearow	Spearow	Tiny Bird Pokémon	Its reckless nature leads it to stand up to\nothers—even large Pokémon—if it has to protect\nits territory.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png
22	fearow	Fearow	Beak Pokémon	Carrying food through Fearow’s territory is\ndangerous. It will snatch the food away from\nyou in a flash!	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png
29	nidoran-f	Nidoran♀	Poison Pin Pokémon	Nidoran♀ has barbs that secrete a powerful poison.\nThey are thought to have developed as protection for\nthis small-bodied Pokémon. When enraged, it releases\na horrible toxin from its horn.	235	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png
30	nidorina	Nidorina	Poison Pin Pokémon	When Nidorina are with their friends or family, they keep\ntheir barbs tucked away to prevent hurting each other.\nThis Pokémon appears to become nervous if separated\nfrom the others.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png
31	nidoqueen	Nidoqueen	Drill Pokémon	Nidoqueen’s body is encased in extremely hard scales.\nIt is adept at sending foes flying with harsh tackles. This\nPokémon is at its strongest when it is defending its young.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png
32	nidoran-m	Nidoran♂	Poison Pin Pokémon	Nidoran♂ has developed muscles for moving its ears. Thanks\nto them, the ears can be freely moved in any direction. Even\nthe slightest sound does not escape this Pokémon’s notice.	235	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png
33	nidorino	Nidorino	Poison Pin Pokémon	Nidorino has a horn that is harder than a diamond. If it senses\na hostile presence, all the barbs on its back bristle up at once,\nand it challenges the foe with all its might.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png
34	nidoking	Nidoking	Drill Pokémon	Nidoking’s thick tail packs enormously destructive power.\nWith one swing, it can topple a metal transmission tower. Once\nthis Pokémon goes on a rampage, there is no stopping it.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png
37	vulpix	Vulpix	Fox Pokémon	Its beautiful tails have made it very popular.\nHowever, if it’s not brushed diligently, it will\nbe a mass of tangles before you know it.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png
38	ninetales	Ninetales	Fox Pokémon	It is vindictive and relentless by nature.\nThose who cross it even once will be cursed for\na thousand years, along with their descendants.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png
39	jigglypuff	Jigglypuff	Balloon Pokémon	Recordings of Jigglypuff’s strange lullabies can\nbe purchased from department stores. These\nCDs can be found near the bedding area.	170	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png
40	wigglytuff	Wigglytuff	Balloon Pokémon	Thanks to its bouncy body and fine fur,\nthis Pokémon is sought after. Holding one\nin your arms while you sleep feels great.	50	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png
52	meowth	Meowth	Scratch Cat Pokémon	When visiting a junkyard, you may catch sight\nof it having an intense fight with Murkrow over\nshiny objects.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png
53	persian	Persian	Classy Cat Pokémon	Although the jewel on its forehead appears to\nbe a different color than those of Alolan\nPersian, it’s mostly made of the same material.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png
58	growlithe	Growlithe	Puppy Pokémon	While it’s quite friendly toward humans once it’s\ngrown used to them, in the wild it must be quite\nfierce to defend its territory from Rockruff.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png
59	arcanine	Arcanine	Legendary Pokémon	Legends tell of its fighting alongside a general\nand conquering a whole country.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png
63	abra	Abra	Psi Pokémon	It uses various psychic powers even while it’s\nsleeping, so you can’t tell whether or not\nit’s awake.	200	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png
64	kadabra	Kadabra	Psi Pokémon	It stares at a silver spoon to amplify its psychic\npowers before it lets loose. Apparently, gold\nspoons are no good.	100	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png
65	alakazam	Alakazam	Psi Pokémon	Alakazam uses its psychic powers to make the\nspoons it carries. Each spoon is an original that\nthere’s only one of in the whole world.	50	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png
77	ponyta	Ponyta	Fire Horse Pokémon	Ponyta is very weak at birth. It can barely stand up.\nThis Pokémon becomes stronger by stumbling and\nfalling to keep up with its parent.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png
78	rapidash	Rapidash	Fire Horse Pokémon	Rapidash usually can be seen casually cantering in the fields\nand plains. However, when this Pokémon turns serious, its\nfiery manes flare and blaze as it gallops its way up to 150 mph.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png
83	farfetchd	Farfetch’d	Wild Duck Pokémon	Farfetch’d is always seen with a stalk from a plant of some\nsort. Apparently, there are good stalks and bad stalks. This\nPokémon has been known to fight with others over stalks.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png
84	doduo	Doduo	Twin Bird Pokémon	Doduo’s two heads contain completely identical brains. A\nscientific study reported that on rare occasions, there will be\nexamples of this Pokémon possessing different sets of brains.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png
85	dodrio	Dodrio	Triple Bird Pokémon	Apparently, the heads aren’t the only parts of the body that\nDodrio has three of. It has three sets of hearts and lungs as\nwell, so it is capable of running long distances without rest.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png
88	grimer	Grimer	Sludge Pokémon	It was born from sludge on the ocean floor. In a\nsterile environment, the germs within its body\ncan’t multiply, and it dies.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png
89	muk	Muk	Sludge Pokémon	Their food sources have decreased, and their\nnumbers have declined sharply. Sludge ponds\nare being built to prevent their extinction.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png
100	voltorb	Voltorb	Ball Pokémon	Voltorb is extremely sensitive—it explodes at the slightest\nof shocks. It is rumored that it was first created when a\nPoké Ball was exposed to a powerful pulse of energy.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png
101	electrode	Electrode	Ball Pokémon	One of Electrode’s characteristics is its attraction to electricity.\nIt is a problematical Pokémon that congregates mostly at\nelectrical power plants to feed on electricity that has just\nbeen generated.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png
108	lickitung	Lickitung	Licking Pokémon	It checks out whatever’s around it by licking\neverything. If you don’t clean off a spot where\nit’s licked you, you’ll break out in a rash!	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png
113	chansey	Chansey	Egg Pokémon	It seems that other Pokémon’s efforts to take\nits delicious, nutritious egg away from it caused\nChansey to get faster at fleeing.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png
115	kangaskhan	Kangaskhan	Parent Pokémon	Kangaskhan protects its child by keeping it in\nits pouch. It has zero forgiveness for those\nwho harm its child and will beat them down.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png
122	mr-mime	Mr. Mime	Barrier Pokémon	Its pantomime skills are wonderful. You may\nbecome enraptured while watching it, but next\nthing you know, Mr. Mime has made a real wall.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png
123	scyther	Scyther	Mantis Pokémon	Its two sharp scythes are more than just\nweapons. It uses them with dexterity to dress\nits prey before eating.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png
124	jynx	Jynx	Human Shape Pokémon	It sways its hips to a rhythm all its own. The\nprecise movements of Jynx living in Alola are\ntruly wonderful.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png
128	tauros	Tauros	Wild Bull Pokémon	They live in groups. The one with the longest,\nthickest, and most-scarred horns is the boss\nof the herd.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png
132	ditto	Ditto	Transform Pokémon	While it can transform into anything, each Ditto\napparently has its own strengths and\nweaknesses when it comes to transformations.	35	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png
133	eevee	Eevee	Evolution Pokémon	The question of why only Eevee has such\nunstable genes has still not been solved.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png
134	vaporeon	Vaporeon	Bubble Jet Pokémon	Clean, clear waters are its usual habitat. When\nit’s about to be attacked by an invading enemy,\nit dives into the water to hide.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png
135	jolteon	Jolteon	Lightning Pokémon	Its lungs contain an organ that creates\nelectricity. The crackling sound of electricity\ncan be heard when it exhales.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png
136	flareon	Flareon	Flame Pokémon	If it inhales deeply, that’s a sign it’s about to\nattack. Prepare to be hit by flames of over\n3,000 degrees Fahrenheit!	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png
137	porygon	Porygon	Virtual Pokémon	This Pokémon was created using the\ncutting-edge science of 20 years ago, so\nmany parts of it have since become obsolete.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png
143	snorlax	Snorlax	Sleeping Pokémon	It doesn’t do anything other than eat and sleep.\nWhen prompted to make a serious effort,\nthough, it apparently displays awesome power.	25	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png
150	mewtwo	Mewtwo	Genetic Pokémon	Mewtwo is a Pokémon that was created by genetic\nmanipulation. However, even though the scientific power\nof humans created this Pokémon’s body, they failed to\nendow Mewtwo with a compassionate heart.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png
152	chikorita	Chikorita	Leaf Pokémon	In battle, Chikorita waves its leaf around to keep the foe at\nbay. However, a sweet fragrance also wafts from the leaf,\nbecalming the battling Pokémon and creating a cozy,\nfriendly atmosphere all around.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png
153	bayleef	Bayleef	Leaf Pokémon	Bayleef’s neck is ringed by curled-up leaves. Inside each\ntubular leaf is a small shoot of a tree. The fragrance of this\nshoot makes people peppy.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png
154	meganium	Meganium	Herb Pokémon	The fragrance of Meganium’s flower soothes and calms\nemotions. In battle, this Pokémon gives off more of its\nbecalming scent to blunt the foe’s fighting spirit.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png
155	cyndaquil	Cyndaquil	Fire Mouse Pokémon	Cyndaquil protects itself by flaring up the flames on its back.\nThe flames are vigorous if the Pokémon is angry. However, if it\nis tired, the flames splutter fitfully with incomplete combustion.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png
156	quilava	Quilava	Volcano Pokémon	Quilava keeps its foes at bay with the intensity of its flames\nand gusts of superheated air. This Pokémon applies its\noutstanding nimbleness to dodge attacks even while scorching\nthe foe with flames.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png
157	typhlosion	Typhlosion	Volcano Pokémon	Typhlosion obscures itself behind a shimmering heat haze that\nit creates using its intensely hot flames. This Pokémon creates\nblazing explosive blasts that burn everything to cinders.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png
161	sentret	Sentret	Scout Pokémon	When Sentret sleeps, it does so while another stands guard.\nThe sentry wakes the others at the first sign of danger. When\nthis Pokémon becomes separated from its pack, it becomes\nincapable of sleep due to fear.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png
162	furret	Furret	Long Body Pokémon	Furret has a very slim build. When under attack, it can slickly\nsquirm through narrow spaces and get away. In spite of its\nshort limbs, this Pokémon is very nimble and fleet.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png
165	ledyba	Ledyba	Five Star Pokémon	This Pokémon is very sensitive to cold. In the\nwarmth of Alola, it appears quite lively.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png
166	ledian	Ledian	Five Star Pokémon	It’s said that the patterns on its back are\nrelated to the stars in the night sky, but the\ndetails of that relationship remain unclear.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png
167	spinarak	Spinarak	String Spit Pokémon	With threads from its mouth, it fashions sturdy\nwebs that won’t break even if you set a rock\non them.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png
168	ariados	Ariados	Long Leg Pokémon	Every night, it wanders around in search of\nprey, whose movements it restrains by spewing\nthreads before it bites into them with its fangs.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png
172	pichu	Pichu	Tiny Mouse Pokémon	It still can’t use electricity well. When it’s\nsurprised or excited, it discharges\nelectricity unintentionally.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png
173	cleffa	Cleffa	Star Shape Pokémon	On nights with many shooting stars,\nthey gather in packs and dance in circles. If you\nshould see them, something good will happen!	150	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png
174	igglybuff	Igglybuff	Balloon Pokémon	It’s always practicing its singing because it\nwants to improve. Even when it’s asleep,\nit keeps singing in its dreams!	170	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png
175	togepi	Togepi	Spike Ball Pokémon	As its energy, Togepi uses the positive emotions of\ncompassion and pleasure exuded by people and Pokémon.\nThis Pokémon stores up feelings of happiness inside its shell,\nthen shares them with others.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png
176	togetic	Togetic	Happiness Pokémon	Togetic is said to be a Pokémon that brings good fortune.\nWhen the Pokémon spots someone who is pure of heart,\nit is said to appear and share its happiness with that person.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png
179	mareep	Mareep	Wool Pokémon	Clothing made from Mareep’s fleece is easily\ncharged with static electricity, so a special\nprocess is used on it.	235	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png
180	flaaffy	Flaaffy	Wool Pokémon	In the places on its body where fleece doesn’t\ngrow, its skin is rubbery and doesn’t conduct\nelectricity. Those spots are safe to touch.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png
181	ampharos	Ampharos	Light Pokémon	The light from its tail can be seen from space.\nThis is why you can always tell exactly where it\nis, which is why it usually keeps the light off.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png
187	hoppip	Hoppip	Cottonweed Pokémon	This Pokémon drifts and floats with the wind. If it senses the\napproach of strong winds, Hoppip links its leaves with other\nHoppip to prepare against being blown away.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png
188	skiploom	Skiploom	Cottonweed Pokémon	Skiploom’s flower blossoms when the temperature rises\nabove 64 degrees Fahrenheit. How much the flower opens\ndepends on the temperature. For that reason, this Pokémon\nis sometimes used as a thermometer.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png
189	jumpluff	Jumpluff	Cottonweed Pokémon	Jumpluff rides warm southern winds to cross the sea and fly to\nforeign lands. The Pokémon descends to the ground when it\nencounters cold air while it is floating.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png
191	sunkern	Sunkern	Seed Pokémon	Sunkern tries to move as little as it possibly can. It does so\nbecause it tries to conserve all the nutrients it has stored in its\nbody for its evolution. It will not eat a thing, subsisting only on\nmorning dew.	235	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png
192	sunflora	Sunflora	Sun Pokémon	Sunflora converts solar energy into nutrition. It moves around\nactively in the daytime when it is warm. It stops moving as\nsoon as the sun goes down for the night.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png
193	yanma	Yanma	Clear Wing Pokémon	Yanma is capable of seeing 360 degrees without having to\nmove its eyes. It is a great flier that is adept at making sudden\nstops and turning midair. This Pokémon uses its flying ability\nto quickly chase down targeted prey.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png
196	espeon	Espeon	Sun Pokémon	Although it originally had no powers at all,\npeople say its precognitive faculties were\nawakened by its need to protect itself.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png
197	umbreon	Umbreon	Moonlight Pokémon	This Pokémon is nocturnal. Even in total\ndarkness, its large eyes can spot its\nprey clearly!	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png
202	wobbuffet	Wobbuffet	Patient Pokémon	Wobbuffet does nothing but endure attacks—it won’t attack on\nits own. However, it won’t endure an attack on its tail. When\nthat happens, the Pokémon will try to take the foe with it using\nDestiny Bond.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png
203	girafarig	Girafarig	Long Neck Pokémon	Girafarig’s rear head contains a tiny brain that is too small for\nthinking. However, the rear head doesn’t need to sleep, so it\ncan keep watch over its surroundings 24 hours a day.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png
209	snubbull	Snubbull	Fairy Pokémon	It grows close to others easily and is also easily\nspoiled. The disparity between its face and its\nactions makes many young people wild about it.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png
210	granbull	Granbull	Fairy Pokémon	While it has powerful jaws, it doesn’t care for\ndisputes, so it rarely has a chance to display\ntheir might.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png
212	scizor	Scizor	Pincer Pokémon	Its body is like steel. Its tough, heavy pincers\nare more suited to smashing enemies than\ngrabbing them.	25	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png
233	porygon2	Porygon2	Virtual Pokémon	AI has been installed in it. It learns various\nthings all on its own, but it even remembers\nthings it doesn’t need to know.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png
234	stantler	Stantler	Big Horn Pokémon	Stantler’s magnificent antlers were traded at high prices as\nworks of art. As a result, this Pokémon was hunted close to\nextinction by those who were after the priceless antlers.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png
235	smeargle	Smeargle	Painter Pokémon	The fluid of Smeargle’s tail secretions changes\nin the intensity of its hue as the Pokémon’s\nemotions change.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png
238	smoochum	Smoochum	Kiss Pokémon	When it examines things, before touching them\nwith its hands, it makes lip contact and then\ndiligently licks all the dirt off its lips.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png
241	miltank	Miltank	Milk Cow Pokémon	It produces over five gallons of milk a day. The\nhigher the quality of the pastures it lives in,\nthe richer and tastier its milk becomes.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png
242	blissey	Blissey	Happiness Pokémon	Their eggs are such a delicacy that some say\neating one will bring you happiness. These eggs\nfetch the highest prices on the market.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png
255	torchic	Torchic	Chick Pokémon	Torchic has a place inside its body where it keeps its flame.\nGive it a hug—it will be glowing with warmth. This Pokémon is\ncovered all over by a fluffy coat of down.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png
256	combusken	Combusken	Young Fowl Pokémon	Combusken battles with the intensely hot flames it spews from\nits beak and with outstandingly destructive kicks. This\nPokémon’s cry is very loud and distracting.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png
257	blaziken	Blaziken	Blaze Pokémon	Blaziken has incredibly strong legs—it can easily clear a\n30-story building in one leap. This Pokémon’s blazing punches\nleave its foes scorched and blackened.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png
261	poochyena	Poochyena	Bite Pokémon	Poochyena is an omnivore—it will eat anything. A distinguishing\nfeature is how large its fangs are compared to its body. This\nPokémon tries to intimidate its foes by making the hair on its\ntail bristle out.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png
262	mightyena	Mightyena	Bite Pokémon	Mightyena travel and act as a pack in the wild. The memory\nof its life in the wild compels the Pokémon to obey only\nthose Trainers that it recognizes to possess superior skill.	127	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png
263	zigzagoon	Zigzagoon	Tiny Raccoon Pokémon	The hair on Zigzagoon’s back is bristly. It rubs the hard back\nhair against trees to leave its territorial markings. This Pokémon\nmay play dead to fool foes in battle.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png
264	linoone	Linoone	Rushing Pokémon	When hunting, Linoone will make a beeline straight for the\nprey at a full run. While this Pokémon is capable of topping\n60 mph, it has to come to a screeching halt before it can turn.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png
276	taillow	Taillow	Tiny Swallow Pokémon	Taillow is young—it has only just left its nest. As a result,\nit sometimes becomes lonesome and cries at night.\nThis Pokémon feeds on Wurmple that live in forests.	200	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png
277	swellow	Swellow	Swallow Pokémon	Swellow is very conscientious about the upkeep of its glossy\nwings. Once two Swellow are gathered, they diligently take\ncare of cleaning each other’s wings.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png
280	ralts	Ralts	Feeling Pokémon	Ralts has the ability to sense the emotions of people. If its\nTrainer is in a cheerful mood, this Pokémon grows cheerful\nand joyous in the same way.	235	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png
281	kirlia	Kirlia	Emotion Pokémon	Kirlia uses the horns on its head to amplify its psychokinetic\npower. When the Pokémon uses its power, the air around it\nbecomes distorted, creating mirages of nonexistent scenery.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png
282	gardevoir	Gardevoir	Embrace Pokémon	Gardevoir has the psychokinetic power to distort the\ndimensions and create a small black hole. This Pokémon\nwill try to protect its Trainer even at the risk of its own life.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png
300	skitty	Skitty	Kitten Pokémon	Skitty is known to chase around playfully after its own tail.\nIn the wild, this Pokémon lives in holes in the trees of forests.\nIt is very popular as a pet because of its adorable looks.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png
301	delcatty	Delcatty	Prim Pokémon	Delcatty sleeps anywhere it wants without keeping a permanent\nnest. If other Pokémon approach it as it sleeps, this Pokémon\nwill never fight—it will just move away somewhere else.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png
309	electrike	Electrike	Lightning Pokémon	Friction between the air and its fur produces\nstatic electricity. When Electrike runs, it makes\na crackling sound.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png
310	manectric	Manectric	Discharge Pokémon	Manectric can be found beneath unnatural\nthunderclouds. People say it can run at the\nsame speed as lightning striking.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png
311	plusle	Plusle	Cheering Pokémon	When Plusle is cheering on its partner, it flashes with electric\nsparks from all over its body. If its partner loses, this Pokémon\ncries loudly.	200	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png
312	minun	Minun	Cheering Pokémon	Minun loves to cheer on its partner in battle. It gives off sparks\nfrom its body while it is doing so. If its partner is in trouble,\nthis Pokémon gives off increasing amounts of sparks.	200	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png
315	roselia	Roselia	Thorn Pokémon	On extremely rare occasions, a Roselia is said to appear with\nits flowers in unusual colors. The thorns on this Pokémon’s\nhead contain a vicious poison.	150	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png
325	spoink	Spoink	Bounce Pokémon	Spoink keeps a pearl on top of its head. The pearl functions to\namplify this Pokémon’s psychokinetic powers. It is therefore on\na constant search for a bigger pearl.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png
326	grumpig	Grumpig	Manipulate Pokémon	Grumpig uses the black pearls on its body to wield\nits fantastic powers. When it is doing so, it dances bizarrely.\nThis Pokémon’s black pearls are valuable as works of art.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png
327	spinda	Spinda	Spot Panda Pokémon	Its steps are shaky and stumbling. Walking for a\nlong time makes it feel sick.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png
333	swablu	Swablu	Cotton Bird Pokémon	Swablu loves to make things clean. If it spots something dirty,\nit will wipe and polish it with its cottony wings. If its wings\nbecome dirty, this Pokémon finds a stream and showers itself.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png
334	altaria	Altaria	Humming Pokémon	Altaria sings in a gorgeous soprano. Its wings are like cotton\nclouds. This Pokémon catches updrafts with its buoyant wings\nand soars way up into the wild blue yonder.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png
335	zangoose	Zangoose	Cat Ferret Pokémon	Zangoose usually stays on all fours, but when angered, it gets\nup on its hind legs and extends its claws. This Pokémon shares\na bitter rivalry with Seviper that dates back over generations.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png
351	castform	Castform	Weather Pokémon	Although its form changes with the weather,\nthat is apparently the result of a chemical\nreaction and not the result of its own free will.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png
360	wynaut	Wynaut	Bright Pokémon	Wynaut gather on moonlit nights to play by squeezing up\nagainst each other. By being squeezed, this Pokémon gains\nendurance and is trained to dole out powerful counterattacks.	125	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png
380	latias	Latias	Eon Pokémon	Latias is highly intelligent and capable of understanding\nhuman speech. It is covered with a glass-like down.\nThe Pokémon enfolds its body with its down and refracts\nlight to alter its appearance.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png
381	latios	Latios	Eon Pokémon	Latios will only open its heart to a Trainer with a\ncompassionate spirit. This Pokémon can fly faster than a\njet plane by folding its forelegs to minimize air resistance.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png
384	rayquaza	Rayquaza	Sky High Pokémon	It flies forever through the ozone layer, consuming\nmeteoroids for sustenance. The many meteoroids\nin its body provide the energy it needs to Mega Evolve.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png
390	chimchar	Chimchar	Chimp Pokémon	The gas made in its belly burns from its rear end.\nThe fire burns weakly when it feels sick.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png
391	monferno	Monferno	Playful Pokémon	It uses ceilings and walls to launch aerial attacks.\nIts fiery tail is but one weapon.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png
392	infernape	Infernape	Flame Pokémon	It tosses its enemies around with agility. It uses all\nits limbs to fight in its own unique style.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png
396	starly	Starly	Starling Pokémon	They flock around mountains and fields, chasing\nafter bug Pokémon. Their singing is noisy\nand annoying.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png
397	staravia	Staravia	Starling Pokémon	It lives in forests and fields. Squabbles over\nterritory occur when flocks collide.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png
398	staraptor	Staraptor	Predator Pokémon	When Staravia evolve into Staraptor, they leave the\nflock to live alone. They have sturdy wings.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png
399	bidoof	Bidoof	Plump Mouse Pokémon	It constantly gnaws on logs and rocks to whittle\ndown its front teeth. It nests alongside water.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png
400	bibarel	Bibarel	Beaver Pokémon	It makes its nest by damming streams with bark and\nmud. It is known as an industrious worker.	127	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png
403	shinx	Shinx	Flash Pokémon	All of its fur dazzles if danger is sensed. It flees\nwhile the foe is momentarily blinded.	235	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png
404	luxio	Luxio	Spark Pokémon	Strong electricity courses through the tips of its\nsharp claws. A light scratch causes fainting in foes.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png
405	luxray	Luxray	Gleam Eyes Pokémon	Luxray’s ability to see through objects comes in\nhandy when it’s scouting for danger.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png
406	budew	Budew	Bud Pokémon	Over the winter, it closes its bud and endures the\ncold. In spring, the bud opens and releases pollen.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png
407	roserade	Roserade	Bouquet Pokémon	With the movements of a dancer, it strikes with\nwhips that are densely lined with poison thorns.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png
421	cherrim	Cherrim	Blossom Pokémon	If it senses strong sunlight, it opens its folded\npetals to absorb the sun’s rays with its whole body.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png
427	buneary	Buneary	Rabbit Pokémon	Its arms and legs are weak, but when it rolls its\nears up tight and then unleashes them with its\nfull force, it can smash boulders to dust.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png
428	lopunny	Lopunny	Rabbit Pokémon	Lopunny regrows its coat twice a year. Mufflers\nand hats made from its fur are really warm.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png
431	glameow	Glameow	Catty Pokémon	When it’s happy, Glameow demonstrates beautiful\nmovements of its tail, like a dancing ribbon.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png
432	purugly	Purugly	Tiger Cat Pokémon	To make itself appear intimidatingly beefy, it tightly\ncinches its waist with its twin tails.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png
433	chingling	Chingling	Bell Pokémon	There is an orb inside its mouth. When it hops,\nthe orb bounces all over and makes a\nringing sound.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png
438	bonsly	Bonsly	Bonsai Pokémon	It discharges moisture from its eyes, making it\nlook like it’s crying—apparently an effective way\nof getting enemies to let down their guard.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png
439	mime-jr	Mime Jr.	Mime Pokémon	It does its absolute best to mimic the\nmovements and expressions of its opponents,\nbut it’s still not very good at it.	145	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png
440	happiny	Happiny	Playhouse Pokémon	Usually it’s a well-behaved Pokémon, but if you\ntake its round rock away, it will cry and fuss\nand throw a big old tantrum.	130	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png
441	chatot	Chatot	Music Note Pokémon	It can learn and speak human words. If they gather,\nthey all learn the same saying.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png
442	spiritomb	Spiritomb	Forbidden Pokémon	It was bound to a fissure in an odd keystone as\npunishment for misdeeds 500 years ago.	100	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png
447	riolu	Riolu	Emanation Pokémon	It knows how people and Pokémon feel by\nlooking at their auras. It doesn’t approach\ndangerous opponents.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png
448	lucario	Lucario	Aura Pokémon	It concentrates its mental energy and fires off\nmysterious waves called auras, which can crush\nboulders of large size to dust.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png
449	hippopotas	Hippopotas	Hippo Pokémon	It enshrouds itself with sand to protect itself from\ngerms. It does not enjoy getting wet.	140	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png
463	lickilicky	Lickilicky	Licking Pokémon	A contest is under way to determine which one\ncan stick its tongue out the farthest. The\ncurrent record is...more than 82 feet.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png
468	togekiss	Togekiss	Jubilee Pokémon	It shares many blessings with people who respect\none another’s rights and avoid needless strife.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png
469	yanmega	Yanmega	Ogre Darner Pokémon	This six-legged Pokémon is easily capable of\ntransporting an adult in flight. The wings on its tail\nhelp it stay balanced.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png
470	leafeon	Leafeon	Verdant Pokémon	Although it doesn’t like disputes, it will sharpen\nthe leaf on its tail into a blade and fight if it has\nto protect its friends.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png
471	glaceon	Glaceon	Fresh Snow Pokémon	It protects itself by freezing its fur into sharp\nneedles. It can drop its body temperature below\n–75 degrees Fahrenheit.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png
474	porygon-z	Porygon-Z	Virtual Pokémon	Its behavior is noticeably unstable, which is\napparently due to the incompetence of the\nengineer who updated its programming.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png
475	gallade	Gallade	Blade Pokémon	A master of courtesy and swordsmanship, it fights\nusing extending swords on its elbows.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png
479	rotom	Rotom	Plasma Pokémon	Its body is composed of plasma. It is known to\ninfiltrate electronic devices and wreak havoc.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png
480	uxie	Uxie	Knowledge Pokémon	It is said that its emergence gave humans the\nintelligence to improve their quality of life.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png
481	mesprit	Mesprit	Emotion Pokémon	It sleeps at the bottom of a lake. Its spirit is said to\nleave its body to fly on the lake’s surface.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png
482	azelf	Azelf	Willpower Pokémon	It is thought that Uxie, Mesprit, and Azelf all came\nfrom the same egg.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png
492	shaymin	Shaymin	Gratitude Pokémon	The blooming of Gracidea flowers confers the\npower of flight upon it. Feelings of gratitude are\nthe message it delivers.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png
27	sandshrew	Sandshrew	Mouse Pokémon	It lives in areas of limited rainfall. When danger\napproaches, it curls up into a ball to protect its\nsoft stomach.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png
28	sandslash	Sandslash	Mouse Pokémon	Its claws and horns often break off. The broken\nclaws and horns can be used to carve plows for\ntilling farm fields.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png
35	clefairy	Clefairy	Fairy Pokémon	They’re popular, but they’re rare. Trainers who\nshow them off recklessly may be targeted\nby thieves.	150	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png
36	clefable	Clefable	Fairy Pokémon	It can’t help but hear a pin drop from over half\na mile away, so it lives deep in the mountains\nwhere there aren’t many people or Pokémon.	25	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png
41	zubat	Zubat	Bat Pokémon	It has no eyeballs, so it can’t see. It checks its\nsurroundings via the ultrasonic waves it emits\nfrom its mouth.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png
42	golbat	Golbat	Bat Pokémon	Every once in a while, you’ll see a Golbat that’s\nmissing some fangs. This happens when hunger\ndrives it to try biting a Steel-type Pokémon.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png
50	diglett	Diglett	Mole Pokémon	It travels through tunnels that it digs\nunderground. It hates sunlight, so it comes\nout only after the sun goes down.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png
51	dugtrio	Dugtrio	Mole Pokémon	While the three of them normally get along\nsplendidly, on rare occasions a huge fight will\nbreak out over which head gets to eat first.	50	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png
56	mankey	Mankey	Pig Monkey Pokémon	The smallest of things could cause it to lose its\ntemper. Because it doesn’t hold in its stress,\nthis Pokémon can live a long time.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png
57	primeape	Primeape	Pig Monkey Pokémon	It will never forgive opponents who have\nangered it. Even after it has beaten them down\nuntil they can’t move, it never ever forgives.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png
66	machop	Machop	Superpower Pokémon	Once this Pokémon has gained enough\nconfidence and muscle from training with its\nfriends, it challenges Makuhita to a battle.	180	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png
67	machoke	Machoke	Superpower Pokémon	When it encounters an enemy that’s truly\nmighty, this Pokémon removes the power-save\nbelt from its waist and unleashes its full power.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png
68	machamp	Machamp	Superpower Pokémon	It grasps its opponents with its four arms and\ntwists them up in an intricate hold. People call\nit “the Machamp special.”	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png
74	geodude	Geodude	Rock Pokémon	Geodude that have lived a long life have had all\ntheir edges smoothed out until they’re totally\nround. They also have a calm, quiet disposition.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png
75	graveler	Graveler	Rock Pokémon	It climbs up cliffs as it heads toward the peak\nof a mountain. As soon as it reaches the summit,\nit rolls back down the way it came.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png
76	golem	Golem	Megaton Pokémon	When Golem grow old, they stop shedding their\nshells. Those that have lived a long, long time\nhave shells green with moss.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png
81	magnemite	Magnemite	Magnet Pokémon	It’s frequently the cause of power outages,\nwhich is why some power plants send out\nelectrical signals that it can’t stand.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png
82	magneton	Magneton	Magnet Pokémon	Delicate equipment can malfunction in areas\ninhabited by Magneton, which send out\nmysterious electrical signals.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png
95	onix	Onix	Rock Snake Pokémon	Onix has a magnet in its brain. It acts as a compass so that\nthis Pokémon does not lose direction while it is tunneling.\nAs it grows older, its body becomes increasingly rounder\nand smoother.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png
104	cubone	Cubone	Lonely Pokémon	At night, it weeps loudly for its dead mother,\nbut those cries only attract its natural\nenemy—Mandibuzz.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png
105	marowak	Marowak	Bone Keeper Pokémon	It throws bones at Mandibuzz to knock it down.\nIt’s thought that Marowak is trying to avenge\nits parent.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png
106	hitmonlee	Hitmonlee	Kicking Pokémon	Hitmonlee’s legs freely contract and stretch. Using these\nspringlike legs, it bowls over foes with devastating kicks.\nAfter battle, it rubs down its legs and loosens the muscles\nto overcome fatigue.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png
107	hitmonchan	Hitmonchan	Punching Pokémon	Hitmonchan is said to possess the spirit of a boxer who had\nbeen working toward a world championship. This Pokémon\nhas an indomitable spirit and will never give up in the face\nof adversity.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png
109	koffing	Koffing	Poison Gas Pokémon	Koffing embodies toxic substances. It mixes the toxins with raw\ngarbage to set off a chemical reaction that results in a terribly\npowerful poison gas. The higher the temperature, the more gas\nis concocted by this Pokémon.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png
110	weezing	Weezing	Poison Gas Pokémon	Weezing alternately shrinks and inflates its twin bodies to mix\ntogether toxic gases inside. The more the gases are mixed,\nthe more powerful the toxins become. The Pokémon also\nbecomes more putrid.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png
111	rhyhorn	Rhyhorn	Spikes Pokémon	Rhyhorn’s brain is very small. It is so dense, while on a run\nit forgets why it started running in the first place. It apparently\nremembers sometimes if it demolishes something.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png
112	rhydon	Rhydon	Drill Pokémon	Rhydon has a horn that serves as a drill. It is used for\ndestroying rocks and boulders. This Pokémon occasionally\nrams into streams of magma, but the armor-like hide prevents\nit from feeling the heat.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png
125	electabuzz	Electabuzz	Electric Pokémon	Electricity permeates its body. It swings\nits arms round and round to charge up\nelectricity before unleashing a punch.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png
126	magmar	Magmar	Spitfire Pokémon	Its entire body is burning. When it breathes,\nthe temperature rises. When it sneezes, flames\nshoot out!	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png
142	aerodactyl	Aerodactyl	Fossil Pokémon	Restored from DNA found in amber, this\nPokémon exhibited ferocity that was greater\nthan expected. Some casualties resulted.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png
144	articuno	Articuno	Freeze Pokémon	Articuno is a legendary bird Pokémon that can control ice.\nThe flapping of its wings chills the air. As a result, it is said\nthat when this Pokémon flies, snow will fall.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png
145	zapdos	Zapdos	Electric Pokémon	Zapdos is a legendary bird Pokémon that has the ability\nto control electricity. It usually lives in thunderclouds.\nThe Pokémon gains power if it is stricken by lightning bolts.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png
146	moltres	Moltres	Flame Pokémon	Moltres is a legendary bird Pokémon that has the ability\nto control fire. If this Pokémon is injured, it is said to dip its\nbody in the molten magma of a volcano to burn and heal itself.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png
149	dragonite	Dragonite	Dragon Pokémon	It flies over raging seas as if they were nothing.\nObserving this, a ship’s captain dubbed this\nPokémon “the sea incarnate.”	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png
160	feraligatr	Feraligatr	Big Jaw Pokémon	Feraligatr intimidates its foes by opening its huge mouth.\nIn battle, it will kick the ground hard with its thick and powerful\nhind legs to charge at the foe at an incredible speed.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png
169	crobat	Crobat	Bat Pokémon	Its fangs are so sharp, if it bites you in the dark\nand sucks your blood, you won’t notice any pain\nor realize you’ve been bitten.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png
185	sudowoodo	Sudowoodo	Imitation Pokémon	It’s so popular with the elderly that there’s a\nmagazine devoted to this Pokémon. Fans obsess\nover the particular length and angle of its arms.	65	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png
343	baltoy	Baltoy	Clay Doll Pokémon	Depictions of Pokémon similar to Baltoy have\nbeen found on the walls of caves where\nprimitive humans lived.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png
207	gligar	Gligar	Fly Scorpion Pokémon	Gligar glides through the air without a sound as if it were\nsliding. This Pokémon hangs on to the face of its foe using\nits clawed hind legs and the large pincers on its forelegs, then\ninjects the prey with its poison barb.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png
208	steelix	Steelix	Iron Snake Pokémon	Steelix lives even further underground than Onix.\nThis Pokémon is known to dig toward the earth’s core.\nThere are records of this Pokémon reaching a depth of\nover six-tenths of a mile underground.	25	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png
215	sneasel	Sneasel	Sharp Claw Pokémon	They will cooperate to steal eggs from the nests\nof bird Pokémon, but fights break out to\ndetermine which one gets to eat the eggs.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png
218	slugma	Slugma	Lava Pokémon	Slugma does not have any blood in its body. Instead, intensely\nhot magma circulates throughout this Pokémon’s body,\ncarrying essential nutrients and oxygen to its organs.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png
219	magcargo	Magcargo	Lava Pokémon	Magcargo’s body temperature is approximately\n18,000 degrees Fahrenheit. Water is vaporized on contact.\nIf this Pokémon is caught in the rain, the raindrops instantly\nturn into steam, cloaking the area in a thick fog.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png
220	swinub	Swinub	Pig Pokémon	Swinub roots for food by rubbing its snout against the ground.\nIts favorite food is a mushroom that grows under the cover of\ndead grass. This Pokémon occasionally roots out hot springs.	225	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png
221	piloswine	Piloswine	Swine Pokémon	Piloswine is covered by a thick coat of long hair that enables\nit to endure the freezing cold. This Pokémon uses its tusks to\ndig up food that has been buried under ice.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png
225	delibird	Delibird	Delivery Pokémon	It shares its food with people who are stranded.\nBecause Delibird is omnivorous, sometimes\nit gives those people bug Pokémon.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png
227	skarmory	Skarmory	Armor Bird Pokémon	The wing feathers it sheds can be processed\nand made into knives whose sharpness is\nrecognized by the finest chefs.	25	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png
228	houndour	Houndour	Dark Pokémon	It cooperates with others skillfully. When it\nbecomes your partner, it’s very loyal to you as\nits Trainer and will obey your orders.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png
229	houndoom	Houndoom	Dark Pokémon	They spew flames mixed with poison to finish\noff their opponents. They divvy up their prey\nevenly among the members of their pack.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png
231	phanpy	Phanpy	Long Nose Pokémon	Phanpy uses its long nose to shower itself. When others\ngather around, they thoroughly douse each other with water.\nThese Pokémon can be seen drying their soaking-wet\nbodies at the edge of water.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png
232	donphan	Donphan	Armor Pokémon	If Donphan were to tackle with its hard body, even a house\ncould be destroyed. Using its massive strength, the Pokémon\nhelps clear rock and mud slides that block mountain trails.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png
236	tyrogue	Tyrogue	Scuffle Pokémon	Tyrogue becomes stressed out if it does not get to train every\nday. When raising this Pokémon, the Trainer must establish\nand uphold various training methods.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png
237	hitmontop	Hitmontop	Handstand Pokémon	Hitmontop spins on its head at high speed, all the while\ndelivering kicks. This technique is a remarkable mix of both\noffense and defense at the same time. The Pokémon travels\nfaster spinning than it does walking.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png
239	elekid	Elekid	Electric Pokémon	When it hears the crash of thunder, Elekid’s\nmood improves. It can be useful to record that\nsound and play it when Elekid’s feeling down.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png
240	magby	Magby	Live Coal Pokémon	When flames drip from its nose, that means it\nhas a cold. Have it lie down for a nice rest in\nsome magma.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png
243	raikou	Raikou	Thunder Pokémon	Raikou embodies the speed of lightning. The roars of\nthis Pokémon send shock waves shuddering through the\nair and shake the ground as if lightning bolts had come\ncrashing down.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png
244	entei	Entei	Volcano Pokémon	Entei embodies the passion of magma. This Pokémon is\nthought to have been born in the eruption of a volcano.\nIt sends up massive bursts of fire that utterly consume all\nthat they touch.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png
245	suicune	Suicune	Aurora Pokémon	Suicune embodies the compassion of a pure spring of water.\nIt runs across the land with gracefulness. This Pokémon has\nthe power to purify dirty water.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png
246	larvitar	Larvitar	Rock Skin Pokémon	Born underground, it eats its way through dirt to\nthe surface, where its parents are. It doesn’t\ndeal well with the bright light it finds there.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png
247	pupitar	Pupitar	Hard Shell Pokémon	This troublesome Pokémon can’t wait to evolve,\nso it relieves its stress by wildly propelling itself\naround using compressed gas.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png
248	tyranitar	Tyranitar	Armor Pokémon	It wanders through the mountains seeking\nopponents to fight. If it finds an opponent that’s\nnot worthy, Tyranitar ignores it and wanders on.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png
249	lugia	Lugia	Diving Pokémon	Lugia’s wings pack devastating power—a light fluttering of its\nwings can blow apart regular houses. As a result, this\nPokémon chooses to live out of sight deep under the sea.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png
250	ho-oh	Ho-Oh	Rainbow Pokémon	Ho-Oh’s feathers glow in seven colors depending on the angle\nat which they are struck by light. These feathers are said to\nbring happiness to the bearers. This Pokémon is said to live at\nthe foot of a rainbow.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png
293	whismur	Whismur	Whisper Pokémon	Whismur is very timid. If it starts to cry loudly, it becomes\nstartled by its own crying and cries even harder. When it finally\nstops crying, the Pokémon goes to sleep, all tired out.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png
294	loudred	Loudred	Big Voice Pokémon	Loudred shouts while stamping its feet. After it finishes\nshouting, this Pokémon becomes incapable of hearing\nanything for a while. This is considered to be a weak point.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png
295	exploud	Exploud	Loud Noise Pokémon	Exploud communicates its feelings to the others by emitting\nwhistle-like sounds from the tubes on its body. This Pokémon\nonly raises its voice when it is in battle.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png
296	makuhita	Makuhita	Guts Pokémon	It practices its slaps by repeatedly slapping\ntree trunks. It has been known to slap an\nExeggutor and get flung away.	180	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png
297	hariyama	Hariyama	Arm Thrust Pokémon	Although they enjoy comparing their strength,\nthey’re also kind. They value etiquette, praising\nopponents they battle.	200	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png
299	nosepass	Nosepass	Compass Pokémon	It moves less than an inch a year, but when\nit’s in a jam, it will spin and drill down into the\nground in a split second.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png
302	sableye	Sableye	Darkness Pokémon	It digs through the ground with its hard claws\nand crunches down gems with its thick pointy\nteeth. Carbink is its favorite food.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png
303	mawile	Mawile	Deceiver Pokémon	A cunning and terrifying Pokémon, its cuteness\nmakes opponents let down their guard—and\nthen it swallows them whole with its huge jaws.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png
304	aron	Aron	Iron Armor Pokémon	Aron has a body of steel. With one all-out charge, this\nPokémon can demolish even a heavy dump truck.\nThe destroyed dump truck then becomes a handy meal\nfor the Pokémon.	180	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png
305	lairon	Lairon	Iron Armor Pokémon	Lairon feeds on iron contained in rocks and water. It makes\nits nest on mountains where iron ore is buried. As a result,\nthe Pokémon often clashes with humans mining the iron ore.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png
306	aggron	Aggron	Iron Armor Pokémon	Aggron is protective of its environment. If its mountain is\nravaged by a landslide or a fire, this Pokémon will haul\ntopsoil to the area, plant trees, and beautifully restore its\nown territory.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png
307	meditite	Meditite	Meditate Pokémon	Meditite heightens its inner energy through meditation.\nIt survives on just one berry a day. Minimal eating is another\naspect of this Pokémon’s training.	180	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png
308	medicham	Medicham	Meditate Pokémon	Through the power of meditation, Medicham developed its\nsixth sense. It gained the ability to use psychokinetic powers.\nThis Pokémon is known to meditate for a whole month\nwithout eating.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png
313	volbeat	Volbeat	Firefly Pokémon	Volbeat’s tail glows like a lightbulb. With other Volbeat,\nit uses its tail to draw geometric shapes in the night sky.\nThis Pokémon loves the sweet aroma given off by Illumise.	150	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png
314	illumise	Illumise	Firefly Pokémon	Illumise leads a flight of illuminated Volbeat to draw signs in\nthe night sky. This Pokémon is said to earn greater respect\nfrom its peers by composing more complex designs in the sky.	150	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png
322	numel	Numel	Numb Pokémon	Numel stores magma of almost 2,200 degrees Fahrenheit\nwithin its body. If it gets wet, the magma cools and hardens.\nIn that event, the Pokémon’s body grows heavy and its\nmovements become sluggish.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png
323	camerupt	Camerupt	Eruption Pokémon	The humps on Camerupt’s back are formed by a transformation\nof its bones. They sometimes blast out molten magma.\nThis Pokémon apparently erupts often when it is enraged.	150	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png
324	torkoal	Torkoal	Coal Pokémon	You can tell how it’s feeling by the smoke\nspouting from its shell. Tremendous velocity\nis a sign of good health.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png
328	trapinch	Trapinch	Ant Pit Pokémon	Its jaws are strong enough to crush rocks but\nso heavy that it can’t get up if it flips over.\nSandile seize those moments as their chance.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png
329	vibrava	Vibrava	Vibration Pokémon	It vibrates its wings to generate ultrasonic\nwaves, causing its prey to faint. Then it buries\nthe prey alive in the sand to preserve it.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png
330	flygon	Flygon	Mystic Pokémon	By flapping their wings, Flygon cause\nsandstorms that conceal Krookodile.\nThe team then splits the prey they catch.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png
331	cacnea	Cacnea	Cactus Pokémon	The more arid and harsh the environment, the more pretty and\nfragrant a flower Cacnea grows. This Pokémon battles by\nwildly swinging its thorny arms.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png
332	cacturne	Cacturne	Scarecrow Pokémon	If a traveler is going through a desert in the thick of night,\nCacturne will follow in a ragtag group. The Pokémon are\nbiding their time, waiting for the traveler to tire and become\nincapable of moving.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png
337	lunatone	Lunatone	Meteorite Pokémon	Lunatone becomes active around the time of the full moon.\nInstead of walking, it moves by floating in midair.\nThe Pokémon’s intimidating red eyes cause all those who\nsee it to become transfixed with fear.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png
338	solrock	Solrock	Meteorite Pokémon	Sunlight is the source of Solrock’s power. It is said to possess\nthe ability to read the emotions of others. This Pokémon gives\noff intense heat while rotating its body.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png
344	claydol	Claydol	Clay Doll Pokémon	If it gets wet, its body melts. When rain starts\nto fall, it wraps its whole body up with its\npsychic powers to protect itself.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png
358	chimecho	Chimecho	Wind Chime Pokémon	In high winds, Chimecho cries as it hangs from a tree branch or\nthe eaves of a building using a suction cup on its head. This\nPokémon plucks berries with its long tail and eats them.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png
359	absol	Absol	Disaster Pokémon	The only thing unlucky about Absol is its\nappearance. It protects fields and warns people\nof disaster, so one ought to be grateful for it.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png
361	snorunt	Snorunt	Snow Hat Pokémon	It feeds mainly on ice and snow. It’s only able to\nsurvive in a limited number of places in the\nwarm Alola region.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png
362	glalie	Glalie	Face Pokémon	It freezes its prey and chews them whole.\nHowever, it prefers to eat Pokémon like Vanillite\nthat are already frozen.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png
371	bagon	Bagon	Rock Head Pokémon	Whenever it sees bird Pokémon flying through\nthe sky, it becomes envious and smashes its\nsurroundings to bits with headbutts.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png
372	shelgon	Shelgon	Endurance Pokémon	The cells within its body are changing at a\nbewildering pace. Its hard shell is made from\nthe same substance as bone.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png
373	salamence	Salamence	Dragon Pokémon	Overjoyed at finally being able to fly, it flies all\nover the place and usually doesn’t land until it’s\ncompletely exhausted and needs to sleep.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png
374	beldum	Beldum	Iron Ball Pokémon	Instead of blood, magnetism flows through its\nbody. When it’s feeling bad, try giving it\na magnet.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png
375	metang	Metang	Iron Claw Pokémon	With its two brains, it fires powerful psychic\nenergy to stop its prey in their tracks.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png
376	metagross	Metagross	Iron Leg Pokémon	It boasts not only psychic powers but also\nfantastic strength. It grabs its prey with its four\nlegs and holds them in place with its claws.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png
377	regirock	Regirock	Rock Peak Pokémon	Regirock’s body is composed entirely of rocks. Recently,\na study made the startling discovery that the rocks were all\nunearthed from different locations.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png
378	regice	Regice	Iceberg Pokémon	Regice cloaks itself with frigid air of -328 degrees Fahrenheit.\nThings will freeze solid just by going near this Pokémon.\nIts icy body is so cold, it will not melt even if it is immersed\nin magma.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png
379	registeel	Registeel	Iron Pokémon	Registeel was imprisoned by people in ancient times.\nThe metal composing its body is thought to be a curious\nsubstance that is not of this earth.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png
383	groudon	Groudon	Continent Pokémon	Through Primal Reversion and with nature’s full power,\nit will take back its true form. It can cause magma to\nerupt and expand the landmass of the world.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png
385	jirachi	Jirachi	Wish Pokémon	Jirachi will awaken from its sleep of a thousand years if you\nsing to it in a voice of purity. It is said to make true any wish\nthat people desire.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png
386	deoxys	Deoxys	DNA Pokémon	Deoxys emerged from a virus that came from space. It is highly\nintelligent and wields psychokinetic powers. This Pokémon\nshoots lasers from the crystalline organ on its chest.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png
408	cranidos	Cranidos	Head Butt Pokémon	A primeval Pokémon, it possesses a hard and\nsturdy skull, lacking any intelligence within.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png
409	rampardos	Rampardos	Head Butt Pokémon	In ancient times, people would dig up fossils of\nthis Pokémon and use its skull, which is harder\nthan steel, to make helmets.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png
410	shieldon	Shieldon	Shield Pokémon	A mild-mannered, herbivorous Pokémon, it used\nits face to dig up tree roots to eat. The skin on\nits face was plenty tough.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png
411	bastiodon	Bastiodon	Shield Pokémon	The bones of its face are huge and hard, so\nthey were mistaken for its spine until after this\nPokémon was successfully restored.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png
419	floatzel	Floatzel	Sea Weasel Pokémon	Its flotation sac developed as a result of pursuing\naquatic prey. It can double as a rubber raft.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png
420	cherubi	Cherubi	Cherry Pokémon	It evolves by sucking the energy out of the small\nball where it had been storing nutrients.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png
434	stunky	Stunky	Skunk Pokémon	It protects itself by spraying a noxious fluid from its\nrear. The stench lingers for 24 hours.	225	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png
435	skuntank	Skuntank	Skunk Pokémon	It sprays a stinky fluid from its tail. The fluid smells\nworse the longer it is allowed to fester.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png
436	bronzor	Bronzor	Bronze Pokémon	Implements shaped like it were discovered in\nancient tombs. It is unknown if they are related.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png
437	bronzong	Bronzong	Bronze Bell Pokémon	Ancient people believed that petitioning Bronzong\nfor rain was the way to make crops grow.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png
443	gible	Gible	Land Shark Pokémon	It reacts to anything that moves—flies right at it\nand bites it. Sometimes it injures itself, but it\ndoesn’t care too much.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png
444	gabite	Gabite	Cave Pokémon	It loves shiny things. When it finds a Sableye\ntrying to catch a Carbink, Gabite becomes\nfuriously angry and attacks the Sableye.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png
454	toxicroak	Toxicroak	Toxic Mouth Pokémon	Its knuckle claws secrete a toxin so vile that even a\nscratch could prove fatal.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png
455	carnivine	Carnivine	Bug Catcher Pokémon	It binds itself to trees in marshes. It attracts prey\nwith its sweet-smelling drool and gulps them down.	200	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png
456	finneon	Finneon	Wing Fish Pokémon	When night falls, their pink patterns begin to\nshine. They’re popular with divers, so there are\nresorts that feed them to keep them close.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png
457	lumineon	Lumineon	Neon Pokémon	Deep down at the bottom of the ocean, prey is\nscarce. Lumineon get into fierce disputes with\nLanturn over food.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png
458	mantyke	Mantyke	Kite Pokémon	It’s highly friendly and easily tamed. Tours that\ntake people swimming with Mantyke are a\nsuper-popular beach activity.	25	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png
459	snover	Snover	Frost Tree Pokémon	In the spring, it grows berries with the texture of\nfrozen treats around its belly.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png
460	abomasnow	Abomasnow	Frost Tree Pokémon	It lives a quiet life on mountains that are perpetually\ncovered in snow. It hides itself by whipping\nup blizzards.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png
461	weavile	Weavile	Sharp Claw Pokémon	One Weavile will trip a Sandshrew and flip it\nover, and then another Weavile will deal the\nfinishing blow with its sharp claws.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png
462	magnezone	Magnezone	Magnet Area Pokémon	It uses radar to monitor its territory. Intruders\nare quickly disposed of with a hyper beam.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png
464	rhyperior	Rhyperior	Drill Pokémon	It puts rocks in holes in its palms and uses its\nmuscles to shoot them. Geodude are shot at\nrare times.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png
466	electivire	Electivire	Thunderbolt Pokémon	It grips its tail, which spews electricity, and\nthen beats down opponents with the power of\nits electrified fist.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png
467	magmortar	Magmortar	Blast Pokémon	There are still quite a few factories that rely on\nthe flames provided by Magmortar to\nprocess metals.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png
472	gliscor	Gliscor	Fang Scorpion Pokémon	Its flight is soundless. It uses its lengthy tail to\ncarry off its prey... Then its elongated fangs do\nthe rest.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png
473	mamoswine	Mamoswine	Twin Tusk Pokémon	Its impressive tusks are made of ice. The population\nthinned when it turned warm after the ice age.	50	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png
476	probopass	Probopass	Compass Pokémon	Although it can control its units known as\nMini-Noses, they sometimes get lost and don’t\ncome back.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png
478	froslass	Froslass	Snow Land Pokémon	It freezes hikers who have come to climb snowy\nmountains and carries them back to its home. It\nonly goes after men it thinks are handsome.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png
483	dialga	Dialga	Temporal Pokémon	It has the power to control time. It appears in\nSinnoh-region myths as an ancient deity.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png
484	palkia	Palkia	Spatial Pokémon	It has the ability to distort space. It is described as\na deity in Sinnoh-region mythology.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png
485	heatran	Heatran	Lava Dome Pokémon	Boiling blood, like magma, circulates through its\nbody. It makes its dwelling place in volcanic caves.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png
486	regigigas	Regigigas	Colossal Pokémon	There is an enduring legend that states this\nPokémon towed continents with ropes.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png
487	giratina	Giratina	Renegade Pokémon	It was banished for its violence. It silently gazed\nupon the old world from the Distortion World.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png
491	darkrai	Darkrai	Pitch-Black Pokémon	It can lull people to sleep and make them dream.\nIt is active during nights of the new moon.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png
493	arceus	Arceus	Alpha Pokémon	It is told in mythology that this Pokémon was born\nbefore the universe even existed.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png
7	squirtle	Squirtle	Tiny Turtle Pokémon	Squirtle’s shell is not merely used for protection.\nThe shell’s rounded shape and the grooves on its\nsurface help minimize resistance in water,\nenabling this Pokémon to swim at high speeds.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png
8	wartortle	Wartortle	Turtle Pokémon	Its tail is large and covered with a rich, thick fur. The tail\nbecomes increasingly deeper in color as Wartortle ages.\nThe scratches on its shell are evidence of this Pokémon’s\ntoughness as a battler.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png
9	blastoise	Blastoise	Shellfish Pokémon	Blastoise has water spouts that protrude from its shell.\nThe water spouts are very accurate.\nThey can shoot bullets of water with enough accuracy\nto strike empty cans from a distance of over 160 feet.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png
54	psyduck	Psyduck	Duck Pokémon	Using psychokinesis gives it a headache, so it\nnormally passes the time spacing out and doing\nas little as possible.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png
55	golduck	Golduck	Duck Pokémon	Even fast-swimming fish Pokémon can be\ndisabled by Golduck. It brings them to a\nstandstill and seizes them.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png
60	poliwag	Poliwag	Tadpole Pokémon	Despite the danger, it wants to come up on land.\nSo it does its best to waddle along, but when\nan enemy finds it, it rushes back to the water.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png
61	poliwhirl	Poliwhirl	Tadpole Pokémon	Although it has become capable of living on\nland, it spends its time in the water, where\nits prey, fish Pokémon, are plentiful.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png
62	poliwrath	Poliwrath	Tadpole Pokémon	It’s quite a gifted swimmer, even among\nWater-type Pokémon, but it normally spends its\ntime on land.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png
79	slowpoke	Slowpoke	Dopey Pokémon	There are some places where Slowpoke is\nworshiped because of a long-standing belief\nthat whenever Slowpoke yawns, it rains.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png
80	slowbro	Slowbro	Hermit Crab Pokémon	Spacing out is basically all it does. It turns back\ninto Slowpoke if its tail, along with Shellder,\nbreaks off.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png
118	goldeen	Goldeen	Goldfish Pokémon	Although known for their splendid tail fins,\nGoldeen apparently compete among themselves\nto see whose horn is thickest and sharpest.	225	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png
119	seaking	Seaking	Goldfish Pokémon	Its horn spins like a drill to steadily hollow out\nrocks—even harder ones. The coloration of the\nmale is more vivid.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png
129	magikarp	Magikarp	Fish Pokémon	In the distant past, they were fairly strong, but\nthey have become gradually weaker over time.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png
130	gyarados	Gyarados	Atrocious Pokémon	It fires hyper beams in all directions, burning the\nsurrounding area to ash. There are some regions\nwhere it’s called “the deity of destruction.”	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png
147	dratini	Dratini	Dragon Pokémon	It’s still weak, so it lurks on the floor of bodies\nof water, eating whatever food sinks down and\nliving a quiet life.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png
148	dragonair	Dragonair	Dragon Pokémon	Lakes where Dragonair live are filled with\nofferings from people, because they believe this\nPokémon is able to control the weather.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png
158	totodile	Totodile	Big Jaw Pokémon	Despite the smallness of its body, Totodile’s jaws are very\npowerful. While the Pokémon may think it is just playfully\nnipping, its bite has enough power to cause serious injury.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png
159	croconaw	Croconaw	Big Jaw Pokémon	Once Croconaw has clamped its jaws on its foe, it will\nabsolutely not let go. Because the tips of its fangs are\nforked back like barbed fishhooks, they become impossible\nto remove when they have sunk in.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png
183	marill	Marill	Aqua Mouse Pokémon	When fishing for food at the edge of a fast-running stream,\nMarill wraps its tail around the trunk of a tree. This Pokémon’s\ntail is flexible and configured to stretch.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png
184	azumarill	Azumarill	Aqua Rabbit Pokémon	Azumarill can make balloons out of air. It makes these air\nballoons if it spots a drowning Pokémon. The air balloons\nenable the Pokémon in trouble to breathe.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png
186	politoed	Politoed	Frog Pokémon	Although its cries sound like screams, a\ncomposer created a beautiful ballad that was\ninfluenced by the sounds.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png
194	wooper	Wooper	Water Fish Pokémon	Wooper usually lives in water. However, it occasionally comes\nout onto land in search of food. On land, it coats its body with\na gooey, toxic film.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png
195	quagsire	Quagsire	Water Fish Pokémon	Quagsire hunts for food by leaving its mouth wide open in\nwater and waiting for its prey to blunder in unaware. Because\nthe Pokémon does not move, it does not get very hungry.	90	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png
199	slowking	Slowking	Royal Pokémon	It’s constantly coming up with new ideas that\nwould change the world, but as soon as it\nhits upon a new idea, it forgets it.	70	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png
258	mudkip	Mudkip	Mud Fish Pokémon	In water, Mudkip breathes using the gills on its cheeks. If it is\nfaced with a tight situation in battle, this Pokémon will unleash\nits amazing power—it can crush rocks bigger than itself.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png
259	marshtomp	Marshtomp	Mud Fish Pokémon	Marshtomp is much faster at traveling through mud than it is at\nswimming. This Pokémon’s hindquarters exhibit obvious\ndevelopment, giving it the ability to walk on just its hind legs.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png
260	swampert	Swampert	Mud Fish Pokémon	Swampert predicts storms by sensing subtle differences in the\nsounds of waves and tidal winds with its fins. If a storm is\napproaching, it piles up boulders to protect itself.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png
270	lotad	Lotad	Water Weed Pokémon	Lotad is said to have dwelled on land before. However, this\nPokémon is thought to have returned to water because the\nleaf on its head grew large and heavy. It now lives by floating\natop the water.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png
271	lombre	Lombre	Jolly Pokémon	Lombre’s entire body is covered by a slippery, slimy film.\nIt feels horribly unpleasant to be touched by this Pokémon’s\nhands. Lombre is often mistaken for a human child.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png
272	ludicolo	Ludicolo	Carefree Pokémon	Upon hearing an upbeat and cheerful rhythm, the cells in\nLudicolo’s body become very energetic and active. Even\nin battle, this Pokémon will exhibit an amazing amount\nof power.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png
283	surskit	Surskit	Pond Skater Pokémon	If it’s in a pinch, it will secrete a sweet liquid\nfrom the tip of its head. Syrup made from\ngathering that liquid is tasty on bread.	200	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png
284	masquerain	Masquerain	Eyeball Pokémon	Masquerain intimidates enemies with the eyelike\npatterns of its eyespots. If that doesn’t work, it\ndeftly makes its escape on its set of four wings.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png
298	azurill	Azurill	Polka Dot Pokémon	Azurill’s tail is large and bouncy. It is packed full of the\nnutrients this Pokémon needs to grow. Azurill can be seen\nbouncing and playing on its big, rubbery tail.	150	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png
339	barboach	Barboach	Whiskers Pokémon	Its entire body is gooey. When pecked at by\nbird Pokémon, it slips and slides its way\nto freedom.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png
340	whiscash	Whiscash	Whiskers Pokémon	Whiscash shakes the ground at high intensities\nto intimidate its opponents. It swallows its prey\nwhole—along with mud from the swamp floor.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png
341	corphish	Corphish	Ruffian Pokémon	Individuals that have been set free by Trainers\nwho could no longer raise them have become\ncommon, and they can now be found in Alola.	205	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png
342	crawdaunt	Crawdaunt	Rogue Pokémon	Its temperament is rough and it loves to fight,\nbut as soon as its pincers break off, it turns\ncowardly. It stays timid until they grow back.	155	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png
393	piplup	Piplup	Penguin Pokémon	Because it is very proud, it hates accepting food\nfrom people. Its thick down guards it from cold.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png
394	prinplup	Prinplup	Penguin Pokémon	It lives a solitary life. Its wings deliver wicked blows\nthat can snap even the thickest of trees.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png
395	empoleon	Empoleon	Emperor Pokémon	The three horns that extend from its beak attest to\nits power. The leader has the biggest horns.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png
424	ambipom	Ambipom	Long Tail Pokémon	In their search for comfortable trees, they get\ninto territorial disputes with groups of\nPassimian. They win about half the time.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png
425	drifloon	Drifloon	Balloon Pokémon	Its round body is stuffed with souls and\nexpands each time it leads someone away.	125	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png
445	garchomp	Garchomp	Mach Pokémon	It flies at the speed of sound while searching\nfor prey, and it has midair battles with\nSalamence as the two compete for food.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png
446	munchlax	Munchlax	Big Eater Pokémon	It hides food under its long fur, but it\nsometimes forgets about it and causes\na stinky disturbance.	50	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png
72	tentacool	Tentacool	Jellyfish Pokémon	It drifts through the sea searching for prey.\nIts poisonous tentacles break off sometimes,\nbut after a while, they grow back.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png
73	tentacruel	Tentacruel	Jellyfish Pokémon	It fires off ultrasonic waves from its red orbs\nto weaken its prey, and then it wraps them up\nin its 80 tentacles.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png
86	seel	Seel	Sea Lion Pokémon	It has always been supposed that Seel live only\nin cold seas. Their having shown up in Alola is\na mystery.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png
87	dewgong	Dewgong	Sea Lion Pokémon	It swims through the ocean at a speed of eight\nknots, searching for Pokémon that will become\nits prey. It’s especially fond of Wishiwashi.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png
90	shellder	Shellder	Bivalve Pokémon	The sand that accumulates inside its shell\neventually becomes a pearl. But the pearl gets\nin the way, so it spits it out and discards it.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png
91	cloyster	Cloyster	Bivalve Pokémon	If areas of Cloyster’s very hard shell get\ndamaged, those areas swell, gradually growing\ninto large sharp spikes.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png
98	krabby	Krabby	River Crab Pokémon	Krabby live on beaches, burrowed inside holes dug into\nthe sand. On sandy beaches with little in the way of food,\nthese Pokémon can be seen squabbling with each other\nover territory.	225	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png
99	kingler	Kingler	Pincer Pokémon	Kingler has an enormous, oversized claw. It waves this huge\nclaw in the air to communicate with others. However, because\nthe claw is so heavy, the Pokémon quickly tires.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png
116	horsea	Horsea	Dragon Pokémon	If Horsea senses danger, it will reflexively spray a dense\nblack ink from its mouth and try to escape. This Pokémon\nswims by cleverly flapping the fin on its back.	225	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png
117	seadra	Seadra	Dragon Pokémon	Seadra generates whirlpools by spinning its body.\nThe whirlpools are strong enough to swallow even\nfishing boats. This Pokémon weakens prey with\nthese currents, then swallows it whole.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png
120	staryu	Staryu	Star Shape Pokémon	In many places, there are folktales of stardust\nfalling into the ocean and becoming Staryu.	225	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png
121	starmie	Starmie	Mysterious Pokémon	Its sparkling core is called “the gem of the sea.”\nThis core can be made into high-priced\naccessories that are traded in secret.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png
131	lapras	Lapras	Transport Pokémon	It likes swimming around with people on its\nback. In the Alola region, it’s an important means\nof transportation over water.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png
138	omanyte	Omanyte	Spiral Pokémon	Omanyte lived in the seas of antiquity. Its\nfossils have been found bearing bite marks from\nArcheops, so apparently Archeops preyed on it.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png
139	omastar	Omastar	Spiral Pokémon	Its heavy shell is thought to be the reason this\nancient Pokémon died out. It’s apparently a\ndistant ancestor of Octillery.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png
140	kabuto	Kabuto	Shellfish Pokémon	This Pokémon thrived 300 million years ago. It’s\nsaid that living specimens can still be seen\nin a certain region—a rare sight.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png
141	kabutops	Kabutops	Shellfish Pokémon	Its body had begun to change so it could\nfunction on land. But it didn’t adapt in time and\nwent extinct.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png
170	chinchou	Chinchou	Angler Pokémon	Its two antennae glow softly to lure in prey,\nmaking it a useful Pokémon for night fishing.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png
171	lanturn	Lanturn	Light Pokémon	When the bacteria living inside its antennae\nabsorb Lanturn’s bodily fluids, a strong\nluminescent effect is produced.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png
211	qwilfish	Qwilfish	Balloon Pokémon	Qwilfish sucks in water, inflating itself. This Pokémon\nuses the pressure of the water it swallowed to shoot toxic\nquills all at once from all over its body. It finds swimming\nsomewhat challenging.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png
213	shuckle	Shuckle	Mold Pokémon	Shuckle quietly hides itself under rocks, keeping its body\nconcealed inside its hard shell while eating berries it has\nstored away. The berries mix with its body fluids to become\na juice.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png
222	corsola	Corsola	Coral Pokémon	The pink of Corsola that live in Alola is deep\nand vibrant, thanks to seas filled with nutrition.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png
223	remoraid	Remoraid	Jet Pokémon	This Pokémon clings to Mantine and shares in\nits prosperity. When its Mantine is attacked,\nRemoraid will fight alongside it!	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png
224	octillery	Octillery	Jet Pokémon	The ink it spits when escaping is special.\nIt contains a substance that dulls the sense of\nsmell, so Pokémon with keen noses get lost.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png
226	mantine	Mantine	Kite Pokémon	Postcards and posters featuring Mantine\nleaping elegantly above the waves are popular\nsouvenirs of Alola.	25	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png
230	kingdra	Kingdra	Dragon Pokémon	Kingdra sleeps on the seafloor where it is otherwise devoid\nof life. When a storm arrives, the Pokémon is said to awaken\nand wander about in search of prey.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png
278	wingull	Wingull	Seagull Pokémon	With its long, thin wings, it catches updrafts\nand flies like a glider high up into the sky.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png
279	pelipper	Pelipper	Water Bird Pokémon	It places small Pokémon into its spacious beak\nand carries them around. No one knows where\nit’s taking them.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png
318	carvanha	Carvanha	Savage Pokémon	They’re such cowards that they won’t hunt\nalone. When five or so of them get together,\nthey suddenly turn ferocious!	225	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png
319	sharpedo	Sharpedo	Brutal Pokémon	People believe that carrying one of its\ndiscarded fangs will prevent mishaps at sea,\nso the fangs are made into accessories.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png
320	wailmer	Wailmer	Ball Whale Pokémon	It swims along with its mouth open and\nswallows down seawater along with its food.\nIt sprays excess water out of its nostrils.	125	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png
321	wailord	Wailord	Float Whale Pokémon	They eat so many fish Pokémon that when\nWailord become too numerous, fishermen have\nto chase them off.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png
345	lileep	Lileep	Sea Lily Pokémon	In ancient times, it lived in warm seas. It\ndisguised itself as seaweed to ambush its prey\nand devoured them whole when they got close.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png
346	cradily	Cradily	Barnacle Pokémon	Normally, it lived on shallow sea shoals. When\nthe tide went out, this Pokémon came up on\nland to search for prey.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png
347	anorith	Anorith	Old Shrimp Pokémon	When restored Anorith are released into the\nocean, they don’t thrive, because the water\ncomposition has changed since their era.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png
348	armaldo	Armaldo	Plate Pokémon	It lived on land and went out into the sea to\nhunt for prey. Its sharp claws were its\ngreatest weapon.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png
349	feebas	Feebas	Fish Pokémon	They look ragged, so no one catches them. They\nlook like they’d taste bad, so predators won’t\neat them. And their numbers continue to grow.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png
350	milotic	Milotic	Tender Pokémon	While Milotic is said to be the most beautiful\nPokémon, Trainers who like Feebas and have\nraised it are seemingly disappointed by Milotic.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png
363	spheal	Spheal	Clap Pokémon	Spheal always travels by rolling around on its ball-like body.\nWhen the season for ice floes arrives, this Pokémon can be\nseen rolling about on ice and crossing the sea.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png
364	sealeo	Sealeo	Ball Roll Pokémon	Sealeo often balances and rolls things on the tip of its\nnose. While the Pokémon is rolling something, it checks\nthe object’s aroma and texture to determine whether it likes\nthe object or not.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png
365	walrein	Walrein	Ice Break Pokémon	Walrein swims all over in frigid seawater while crushing\nicebergs with its grand, imposing tusks. Its thick layer of\nblubber makes enemy attacks bounce off harmlessly.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png
366	clamperl	Clamperl	Bivalve Pokémon	Despite its appearance, it’s carnivorous. It\nclamps down on its prey with both sides of its\nshell and doesn’t let go until they stop moving.	255	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png
367	huntail	Huntail	Deep Sea Pokémon	It’s not the strongest swimmer. It wags its tail to\nlure in its prey and then gulps them down as\nsoon as they get close.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png
368	gorebyss	Gorebyss	South Sea Pokémon	The color of its body changes with the water\ntemperature. The coloration of Gorebyss in Alola\nis almost blindingly vivid.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png
369	relicanth	Relicanth	Longevity Pokémon	Thought to have gone extinct, Relicanth was\ngiven a name that is a variation of the name of\nthe person who discovered it.	25	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png
370	luvdisc	Luvdisc	Rendezvous Pokémon	There was an era when it was overfished due to\nthe rumor that having one of its heart-shaped\nscales would enable you to find a sweetheart.	225	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png
382	kyogre	Kyogre	Sea Basin Pokémon	Kyogre is said to be the personification of the sea itself.\nLegends tell of its many clashes against Groudon,\nas each sought to gain the power of nature.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png
422	shellos	Shellos	Sea Slug Pokémon	While they normally live in the sea, they can\nfunction on land, too, until their skin dries out.	190	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png
423	gastrodon	Gastrodon	Sea Slug Pokémon	Long ago, it had a shell on its back. There’s now\na vestigial plate on its back that’s hard but thin.	75	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png
450	hippowdon	Hippowdon	Heavyweight Pokémon	It blasts internally stored sand from ports on its\nbody to create a towering twister for attack.	60	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png
451	skorupi	Skorupi	Scorpion Pokémon	It burrows under the sand to lie in wait for prey.\nIts tail claws can inject its prey with a\nsavage poison.	120	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png
452	drapion	Drapion	Ogre Scorpion Pokémon	It has the power in its clawed arms to make scrap\nof a car. The tips of its claws release poison.	45	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png
489	phione	Phione	Sea Drifter Pokémon	It drifts in warm seas. It always returns to where it\nwas born, no matter how far it may have drifted.	30	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png
490	manaphy	Manaphy	Seafaring Pokémon	It starts its life with a wondrous power that permits\nit to bond with any kind of Pokémon.	3	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png
\.


--
-- Name: habitats habitats_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY public.habitats
    ADD CONSTRAINT habitats_pkey PRIMARY KEY (name);


--
-- Name: pokehabitats pokeHabitats_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY public.pokehabitats
    ADD CONSTRAINT "pokeHabitats_pkey" PRIMARY KEY (habitat, pokemon);


--
-- Name: pokemon pokemon_name_key; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_name_key UNIQUE (name);


--
-- Name: pokemon pokemon_pkey; Type: CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_pkey PRIMARY KEY (id);


--
-- Name: pokehabitats pokeHabitats_habitat_fkey; Type: FK CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY public.pokehabitats
    ADD CONSTRAINT "pokeHabitats_habitat_fkey" FOREIGN KEY (habitat) REFERENCES public.habitats(name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pokehabitats pokeHabitats_pokemon_fkey; Type: FK CONSTRAINT; Schema: public; 
--

ALTER TABLE ONLY public.pokehabitats
    ADD CONSTRAINT "pokeHabitats_pokemon_fkey" FOREIGN KEY (pokemon) REFERENCES public.pokemon(name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

