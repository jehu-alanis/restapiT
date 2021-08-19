const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51IvatVHhSm5BF1EZx7Jmbd8L3mH7ymKZYLrfWOcx0GTQyU1nhCmn56S492NkfRWMyhBx74CPW7DEaSRreLBqYxwg00RCfQtzKS");


export const getCheckout =  async (req,res) =>{
    const {id, amount} = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "MXN",
            description: "Basket of products",
            payment_method: id,
            confirm: true
        });
        console.log(payment);
        return res.status(200).json({ message: "succesful" });

    } catch (error) {
       return res.json({ message: error.raw.message })    
    }
}

