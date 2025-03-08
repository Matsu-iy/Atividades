export default class StartingScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartingScene" });
  }

  preload() {
    this.load.image("background", "assets/Background.jpg");
    this.load.image("play_button", "assets/Click_to_play.png");
  }

  create() {
    this.add.image(400, 300, "background").setScale(1);
    this.add.image(500, 150, "play_button").setScale(0.1);
    const start = this.add
      .image(500, 150, "play_button")
      .setScale(0.1) // Adjusted size
      .setInteractive();

    start.on("pointerover", () => {
      start.setTint(0x00ff00);
      start.setScale(0.11); // Adjusted size
    });

    start.on("pointerout", () => {
      start.clearTint();
      start.setScale(0.1); // Adjusted size
    });

    start.on("pointerdown", () => {
      this.cameras.main.fadeOut(1000, 0, 0, 0);
      this.cameras.main.once("camerafadeoutcomplete", () => {
        this.scene.start("GameScene");
      });
    });
  }
}
