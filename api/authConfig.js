const passportConfig = {
    credentials: {
        tenantName: '<TENANT_NAME>.onmicrosoft.com',
        clientID: '<API_CLIENT_ID>',
    },
    policies: {
        policyName: 'B2C_1_signup_signin1',
    },
    metadata: {
        b2cDomain: '<TENANT_NAME>.b2clogin.com',
        authority: 'login.microsoftonline.com',
        discovery: '.well-known/openid-configuration',
        version: 'v2.0',
    },
    settings: {
        isB2C: true,
        validateIssuer: false,
        passReqToCallback: true,
        loggingLevel: 'info',
        loggingNoPII: false,
    },
    protectedRoutes: {
        todolist: {
            endpoint: '/api/todolist',
            delegatedPermissions: {
                read: ['ToDoList.Read'],
                write: ['ToDoList.ReadWrite'],
            },
        },
    },
};

module.exports = passportConfig;

