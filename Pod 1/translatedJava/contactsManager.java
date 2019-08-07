import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;

public class contactsManager {
    String name;
    Long phone;

    static Scanner scanner = new Scanner(System.in);
    static int num;

    public static void main(String[] args) {
//        Path datafile = Paths.get(".", "data", "data.txt");
//        System.out.println(datafile);
        startup();
    }


        public static void startup() {
            System.out.println("\n1. View contacts.\n" +
                    "2. Add a new contact.\n" +
                    "3. Search a contact by name.\n" +
                    "4. Delete an existing contact.\n" +
                    "5. Exit.\n" +
                    "Enter an option (1, 2, 3, 4 or 5):\n");
            num = scanner.nextInt();

            switch (num) {
                case 1:
                    //TODO: Print out each line in an existing file, along with the line number - 1
//    Path groceriesPath = Paths.get("data", "groceries.txt");
//    List<String> groceryList = Files.readAllLines(groceriesPath);
//
//for (int i = 0; i < groceryList.size(); i += 1) {
//        System.out.println((i + 1) + ": " + groceryList.get(i));
                    break;

                case 2:
                    //TODO: Add a line to an existing file - 2
//    Files.write(
//            Paths.get("data", "groceries.txt"),
//            Arrays.listOf("eggs"), // list with one item
//    StandardOpenOption.APPEND
//);
                    break;

                case 3:
                    //TODO: if exists method - 3
//    String directory = "data";
//    String filename = "info.txt";
//
//    Path dataDirectory = Paths.get(directory);
//    Path datafile = Paths.get(directory, filename);
//
//        if (Files.notExists(dataDirectory)) {
//        Files.createDirectories(dataDirectory);
//    } else if (!Files.exists(datafile)){
//            try {
//                Files.createFile(dataFile);
//            } catch (IOException ex) {
//                ex.printStackTrace();
//            }
//        }
                    break;

                case 4:
                    //TODO: list and write to file method - 4 but replace with nothing.
//    List<String> groceryList = Arrays.asList("coffee", "milk", "sugar");
//    Path filepath = Paths.get("data", "groceries.txt");
//Files.write(filepath, groceryList);
                    break;

                case 5:
                    System.out.println("Thanks for using Personal Contacts, the leading faux-contact manager");
                    System.exit(0);
                    break;

                default:
                    System.out.println("Hey, that wasn't an option. Please enter in your option again.");
                    startup();
            }

    }






    //TODO: Replace "milk" with "cream" - Optional, would be cool to have an edit feature
//    List<String> lines = Files.readAllLines(Paths.get("data", "groceries.txt"));
//    List<String> newList = new ArrayList<>();
//
//for (String line : lines) {
//        if (line.equals("milk")) {
//            newList.add("cream");
//            continue;
//        }
//        newList.add(line);
//    }
//
//Files.write(Paths.get("data", "groceries.txt"), newList);
}
