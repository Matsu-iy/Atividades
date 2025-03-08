export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }
// carregar as imagens
  preload() {
    this.load.image("background", "assets/Background.jpg");
    this.load.spritesheet("gema1", "assets/gema_azul.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("gema2", "assets/gema_verde.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("gema3", "assets/gema_vermelha.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("gema4", "assets/gema_amarela.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("gema5", "assets/gema_cinza.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("player", "assets/player.png", {
      frameWidth: 32,
      frameHeight: 31,
    });

    this.load.spritesheet("slime1", "assets/slime_green.png", {
      frameWidth: 24,
      frameHeight: 24,
    });
    this.load.spritesheet("slime2", "assets/slime_purple.png", {
      frameWidth: 24,
      frameHeight: 24,
    });
    this.load.image("tiles", "assets/world_tileset.png");
    this.load.tilemapTiledJSON("map", "assets/adventure.json"); // caminho correto
  }

// adicionar as imagens
  create() {
    const { width, height } = this.sys.game.config;
    this.add
      .image(width / 2, height / 2, "background")
      .setDisplaySize(width, height)
      .setDepth(-1)
      .setOrigin(0.5, 0.5);

    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("world_tileset", "tiles"); // updated tileset name
    const wallpaper = map.createLayer("wallpaper", tileset, 5, 5).setScale(1.7);
    const deco = map.createLayer("deco", tileset, 5, 5).setScale(1.7);
    const fisica = map.createLayer("fisica", tileset, 5, 5).setScale(1.7);

    // animação do player

    const idle = {
      key: "idle",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    };
    const run = {
      key: "run",
      frames: this.anims.generateFrameNumbers("player", { start: 16, end: 31 }),
      frameRate: 10,
      repeat: -1,
    };

    this.anims.create(idle);
    this.anims.create(run);

    // animação dos slimes

    this.anims.create({
      key: "slime1",
      frames: this.anims.generateFrameNumbers("slime1", { start: 0, end: 9 }),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: "slime2",
      frames: this.anims.generateFrameNumbers("slime2", { start: 0, end: 9 }),
      frameRate: 7,
      repeat: -1,
    });

    // Animação das gemas

    this.anims.create({
      key: "spin1",
      frames: this.anims.generateFrameNumbers("gema1", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "spin2",
      frames: this.anims.generateFrameNumbers("gema2", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "spin3",
      frames: this.anims.generateFrameNumbers("gema3", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "spin4",
      frames: this.anims.generateFrameNumbers("gema4", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "spin5",
      frames: this.anims.generateFrameNumbers("gema5", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    // fisica & colisão

    fisica.setCollisionByExclusion(-1);

    this.initialPlayerPosition = { x: 50, y: 50 };

    this.player = this.physics.add
      .sprite(
        this.initialPlayerPosition.x,
        this.initialPlayerPosition.y,
        "player"
      )
      .setScale(1);
    this.player.setCollideWorldBounds(true);
    this.player.body.setSize(
      this.player.width * 0.3,
      this.player.height * 0.8,
      true
    ); 

    this.physics.add.collider(this.player, fisica);

    // posição dos slimes

    this.slimes = this.physics.add.group({
      allowGravity: false,
    });
    this.slimes.create(450, 160, "slime1").play("slime1");
    this.slimes.create(835, 130, "slime2").play("slime2").setFlipX(true);

    // Posições das gemas
    this.gems = this.physics.add.group({
      allowGravity: false,
    });
    this.gems.create(100, 150, "gema1").play("spin1");
    this.gems.create(318, 90, "gema2").play("spin2");
    this.gems.create(888, 150, "gema3").play("spin3");
    this.gems.create(450, 100, "gema4").play("spin4");
    this.gems.create(535, 150, "gema5").play("spin5");

    // Colisão entre player e gemas
    this.physics.add.overlap(
      this.player,
      this.gems,
      this.collectGem,
      null,
      this
    );

    // colisão entre player e slimes
    this.physics.add.overlap(
      this.player,
      this.slimes,
      this.resetPlayerPosition,
      null,
      this
    );

    this.cursors = this.input.keyboard.createCursorKeys();

    this.totalGems = this.gems.getChildren().length;
    this.collectedGems = 0;
    this.scoreText = this.add
      .text(16, 16, "Score: 0/" + this.totalGems, {
        fontSize: "32px",
        fill: "#000",
      })
      .setDepth(1);
  }

  collectGem(player, gem) {
    gem.disableBody(true, true);
    this.collectedGems += 1;
    this.scoreText.setText(
      "Score: " + this.collectedGems + "/" + this.totalGems
    );
  }

  resetPlayerPosition(player, slime) {
    player.setPosition(
      this.initialPlayerPosition.x,
      this.initialPlayerPosition.y
    );
    this.collectedGems = 0;
    this.scoreText.setText("Score: 0/" + this.totalGems);
    this.gems.children.iterate(function (gem) {
      gem.enableBody(false, gem.x, gem.y, true, true);
    });
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("run", true);
      this.player.flipX = true;
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("run", true);
      this.player.flipX = false;
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("idle", true);
    }

    if (this.cursors.up.isDown && this.player.body.blocked.down) {
      this.player.setVelocityY(-330);
    }

    this.gems.children.iterate(function (gem) {
      if (gem.body.velocity.x === 0 && gem.body.velocity.y === 0) {
        gem.anims.play("spin" + gem.texture.key.slice(-1), true);
      }
    });
  }
}
