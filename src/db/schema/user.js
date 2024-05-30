module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    const model = mongoose.model;

    const userSchema = new Schema(
        {
            userName: { type: String, required: true },
            accountNumber: { type: String, required: true, index: true, unique: true },
            emailAddress: { type: String, required: true },
            identityNumber: { type: String, required: true, index: true, unique: true },
            createdAt: { type: Date, default: Date.now }
        }
    );

    const User = model("User", userSchema)
    
    return User
}