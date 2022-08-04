export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "ecotrackbackende69b3052": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "ecotrackbackend": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "imageBucket": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "predictions": {
        "identifyProduct": {
            "region": "string",
            "type": "string"
        }
    }
}