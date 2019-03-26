hero = new Hero(0);
blockhead = new Blockhead(1);
lockhead = new Blockhead(2);
ockhead = new Blockhead(3);
ckhead = new Blockhead(4);
head = new Blockhead(5);

gb = new GameBoard(window.innerWidth, window.innerHeight);
gb.init();
gb.loadHero(hero);
gb.loadBlockHead(blockhead);
gb.start();