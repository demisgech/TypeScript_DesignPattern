import { ConfigManager } from "./ConfigManager";

class Main {
  public static main(): void {
    const manager = ConfigManager.instance;
    manager.set("Name", "Demis");

    const other = ConfigManager.instance;
    const name = other.get("name");
    console.log(name);
  }
}
Main.main();
