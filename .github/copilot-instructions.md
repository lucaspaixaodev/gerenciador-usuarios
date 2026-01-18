# Copilot Instructions for GerenciadorUsuarios

## Project Overview
This project is an Angular application designed for user management. It utilizes Angular's reactive programming features, including signals and computed properties, to manage state and user interactions effectively.

### Architecture
- **Components**: The main components include `UsersList` and `SearchInput`, which are responsible for displaying user data and handling search functionality, respectively.
- **Data Flow**: The `App` component serves as the root component, managing the state of users and the search input. It filters users based on the search criteria using a computed property.
- **Service Boundaries**: Currently, the project does not utilize services for data fetching or manipulation, but this can be a future enhancement for better separation of concerns.

## Developer Workflows
- **Starting the Development Server**: Use the command `ng serve` to start the local development server. The application will be accessible at `http://localhost:4200/`.
- **Building the Project**: To build the project for production, run `ng build`. This will compile the application into an output directory.
- **Running Tests**: Execute `ng test` to run unit tests. Ensure that tests are written for all components, especially those handling critical business logic.

## Project Conventions
- **State Management**: Use Angular's reactive features (`signal` and `computed`) for managing component state. Avoid using traditional property binding for state management.
- **Component Communication**: Use input and output properties for parent-child component communication. For sibling components, consider using a shared service in the future.

## Integration Points
- **External Dependencies**: The project relies on Angular CLI for scaffolding and building. Ensure that the Angular version is compatible with the CLI version used.
- **Cross-Component Communication**: Currently, components communicate through the `App` component. Future enhancements may include using services for more complex interactions.

## Examples
- **Filtering Users**: The `filteredUsers` computed property in the `App` component demonstrates how to filter a list based on user input. This pattern can be reused in other components requiring similar functionality.

## Additional Notes
- Keep the README updated with any new features or architectural changes to assist future developers in understanding the project structure and workflows.