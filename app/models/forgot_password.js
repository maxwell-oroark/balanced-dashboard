Balanced.ForgotPassword = Balanced.Model.extend(Ember.Validations, {
    uri: '/password',

    validations: {
        email_address: {
            presence: true
        }
    }
});