# Configurable Web App Title

The SuperApp now supports a configurable title that can be set via the `WEBAPP_TITLE` environment variable.

## Configuration Options

### 1. Environment Variable (Recommended for Azure Web App)
Set the `WEBAPP_TITLE` environment variable:
```bash
export WEBAPP_TITLE="My Custom Azure Web App"
```

### 2. Application Settings (appsettings.json)
Add the configuration to your appsettings.json:
```json
{
  "WEBAPP_TITLE": "My Custom App Title"
}
```

### 3. Default Fallback
If no configuration is provided, the title defaults to "SuperApp is Live!"

## Azure Web App Configuration

In Azure Web App, you can configure the title by:

1. Go to Azure Portal → Your Web App → Configuration
2. Add a new Application Setting:
   - **Name**: `WEBAPP_TITLE`
   - **Value**: Your custom title (e.g., "Production Marketing Site")
3. Save the configuration
4. Restart the web app

## Priority Order

The configuration system follows this priority order:
1. Environment Variables (highest priority)
2. appsettings.json configuration
3. Hard-coded default: "SuperApp is Live!" (lowest priority)

## Usage Examples

```bash
# Development
WEBAPP_TITLE="Development Environment" dotnet run

# Staging
WEBAPP_TITLE="Staging - QA Testing" dotnet run

# Production
WEBAPP_TITLE="Welcome to Our Platform!" dotnet run
```