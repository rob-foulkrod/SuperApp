# SuperApp - Copilot Instructions

## Project Overview
SuperApp is a .NET 8 MVC web application designed as a learning platform to demonstrate modern web development concepts and deployment practices.

## Technology Stack
- **Framework**: ASP.NET Core MVC 8.0
- **Language**: C#
- **Frontend**: HTML5, CSS3, Bootstrap, JavaScript
- **Architecture**: Model-View-Controller (MVC)

## Project Structure
```
SuperApp/
├── Controllers/        # MVC Controllers (HomeController, etc.)
├── Models/            # Data models and view models
├── Views/             # Razor views and layouts
│   ├── Home/          # Home controller views
│   └── Shared/        # Shared layouts and partial views
├── wwwroot/           # Static files (CSS, JS, images)
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   └── lib/           # Client-side libraries
├── Properties/        # Application properties
├── Program.cs         # Application entry point
├── appsettings.json   # Configuration settings
└── SuperApp.csproj    # Project file
```

## Development Guidelines

### Code Style
- Follow C# naming conventions (PascalCase for classes/methods, camelCase for parameters)
- Use meaningful variable and method names
- Add XML documentation comments for public APIs
- Keep controllers lean - business logic should be in services or models

### MVC Best Practices
- **Controllers**: Handle HTTP requests, coordinate between models and views
- **Models**: Represent data and business logic
- **Views**: Present data to users, minimal logic

### Frontend Development
- Use Bootstrap for responsive design
- Follow semantic HTML practices
- Implement progressive enhancement
- Ensure accessibility standards (WCAG 2.1)

### Security Considerations
- Validate all user inputs
- Use HTTPS in production
- Implement proper authentication/authorization when needed
- Protect against CSRF attacks

## Common Development Tasks

### Adding a New Page
1. Create action method in appropriate controller
2. Create corresponding view in Views/[Controller]/ folder
3. Add navigation links if needed
4. Test responsive design

### Styling Changes
- Modify CSS in wwwroot/css/site.css
- Use Bootstrap classes for consistency
- Test across different screen sizes

### Adding Client-Side Functionality
- Add JavaScript to wwwroot/js/site.js
- Use jQuery if already included, or vanilla JS
- Follow progressive enhancement principles

## Deployment Notes
- Application is designed to demonstrate successful deployment
- The index page shows deployment status and key features
- Environment-specific settings in appsettings.json
- Static files served from wwwroot

## Learning Objectives
This application helps learners understand:
- ASP.NET Core MVC architecture
- Modern web development practices
- Responsive web design
- Deployment workflows
- Git version control practices

## Getting Started
1. Ensure .NET 8 SDK is installed
2. Run `dotnet restore` to restore packages
3. Run `dotnet build` to build the project
4. Run `dotnet run` to start the development server
5. Navigate to https://localhost:5001 or http://localhost:5000

## Contributing
- Make small, focused commits with clear messages
- Test changes locally before committing
- Follow the established code style and patterns
- Update documentation when adding new features