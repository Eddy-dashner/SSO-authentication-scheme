module.exports = {
    getClient(clientId, clientSecret){
        return {
            id: clientId,
            secret: clientSecret,
            name: 'Test Client',
            grants: ['password', 'refresh_token']
        };
        saveToken(token, client, user){
            return {
                accessToken: token.accessToken,
                refreshToken: token.refreshToken,
                clientId: client.id,
                userId: user.id
            }
        }
    }
}