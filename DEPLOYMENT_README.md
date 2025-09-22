# Deployment Process Documentation

## Overview

SuperApp uses a staged deployment process to ensure reliable and safe deployments to production. The deployment workflow automatically builds the application, deploys to a staging environment for testing, and then requires manual approval before swapping to production.

## Deployment Workflow

### 1. Automatic Build & Staging Deployment
When code is pushed to the `main` branch, the following happens automatically:

1. **Build**: The application is built using .NET 8 and published as an artifact
2. **Deploy to Staging**: The application is automatically deployed to the `staging` slot of the Azure Web App
3. **Staging URL**: https://superapp-204-staging.azurewebsites.net

### 2. Manual Testing & Approval
After staging deployment completes:

1. **Test the staging environment** using the staging URL
2. **Verify functionality** matches expectations
3. **Review any changes** in the staging environment
4. **Approve production deployment** through GitHub Actions interface

### 3. Production Deployment
After manual approval:

1. **Slot Swap**: The staging slot is swapped with the production slot
2. **Zero Downtime**: The swap operation ensures no downtime for users
3. **Production URL**: https://superapp-204.azurewebsites.net

## Maintainer Guide

### Required Actions for Maintainers

#### Setting Up GitHub Environments
Maintainers need to configure GitHub environments for manual approvals:

1. Go to **Settings** → **Environments** in the GitHub repository
2. Create two environments:
   - `staging` (optional protection rules)
   - `production` (required reviewers)
3. For the `production` environment, add required reviewers who can approve production deployments

#### Approving Production Deployments

1. **Monitor the workflow**: Check GitHub Actions tab for pending deployments
2. **Test staging**: Always test the staging environment before approving
3. **Review changes**: Understand what changes are being deployed
4. **Approve deployment**: Click "Review deployments" and approve the production environment

#### Rollback Process
If issues are found in production:

1. **Immediate rollback**: Use Azure portal to swap slots back
2. **Alternative**: Redeploy previous working version through GitHub Actions
3. **Investigation**: Review logs and fix issues in a new branch

### Azure Web App Requirements

#### Slot Configuration
The Azure Web App must have a `staging` slot configured:

1. In Azure Portal, navigate to your Web App
2. Go to **Deployment slots**
3. Ensure `staging` slot exists
4. Configure slot-specific settings if needed

#### Required Secrets
The following GitHub secrets must be configured:

- `AZUREAPPSERVICE_CLIENTID_D186BCA0108D44F7B64ED31D56CC9A93`
- `AZUREAPPSERVICE_TENANTID_456327AE9D8143308F0E293B0DFF616E`
- `AZUREAPPSERVICE_SUBSCRIPTIONID_DD1018864D6247C8A1880A32F8093827`
- `AZURE_RESOURCE_GROUP` (optional, defaults to DefaultResourceGroup-WUS2)

## Environment Configuration

### Staging Environment
- **URL**: https://superapp-204-staging.azurewebsites.net
- **Purpose**: Testing and validation before production
- **Auto-detected**: JavaScript will show "Staging" environment

### Production Environment
- **URL**: https://superapp-204.azurewebsites.net
- **Purpose**: Live application serving users
- **Auto-detected**: JavaScript will show "Production" environment

## Best Practices

### For Developers
1. **Test locally** before pushing to main
2. **Write descriptive commit messages** for deployment tracking
3. **Monitor staging** deployment results
4. **Coordinate with maintainers** for production deployments

### For Maintainers
1. **Always test staging** before approving production
2. **Review deployment logs** for any warnings or errors
3. **Communicate** with team about deployment schedules
4. **Monitor production** after deployment for issues
5. **Keep rollback plan** ready for critical issues

### Security Considerations
1. **Environment separation**: Staging and production use separate slots
2. **Approval gates**: Production requires manual approval
3. **Access control**: Only authorized maintainers can approve deployments
4. **Audit trail**: All deployments are logged in GitHub Actions

## Troubleshooting

### Common Issues

#### Staging Deployment Fails
1. Check Azure service health
2. Verify secrets are current and valid
3. Review build logs for compilation errors
4. Check Azure Web App configuration

#### Production Approval Blocked
1. Ensure reviewers are added to production environment
2. Check if approvers have appropriate permissions
3. Verify staging deployment completed successfully

#### Slot Swap Fails
1. Check Azure CLI permissions
2. Verify resource group name
3. Ensure staging slot exists and is healthy
4. Review Azure activity logs

### Getting Help
1. **GitHub Actions logs**: Check workflow run details
2. **Azure Portal**: Review Web App deployment history
3. **Team communication**: Contact maintainers or DevOps team
4. **Documentation**: Refer to Azure Web Apps documentation

---

*Last updated: Generated automatically with staged deployment implementation*