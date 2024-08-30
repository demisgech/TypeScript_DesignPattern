import { DatabaseConnection } from "./DatabaseConnection";

class Main {
  public static main(): void {
    const dbConnection = DatabaseConnection.getInstance();
    dbConnection.settings.add("Connection")
    console.log(dbConnection.settings);

    const otherConnection = DatabaseConnection.getInstance();
    otherConnection.settings.add("Connection...");
    console.log(otherConnection.settings);
  }
}

Main.main();
