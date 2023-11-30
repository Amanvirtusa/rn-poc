## Task

### Please choose 1-4 (and that max 4, is a really hard limit. 2-3 would be ideal. There are more then enough and different type of tasks for a reason)
### Make sure to choose fitting tasks which could show how you think, how you write code. Keep in mind code quality and      
### Important time-limit: do not spend more than 2-4 hours on the tasks

1, Create a **coupon component** on **CKOScreen**
    - create in memory storage for available coupons
        - for instance: 5$, 10$, 500$, 10%, 25%
    - user can add a coupon based on these available coupons
        - the payment details should be recalculated on the fly with the applied coupon
        - on checkout action, the new payment should be calculated and shown on **Confirmation** screen

2, Create **jest test(s)** for the coupon component

3, Create **Cosmos fixture** for coupon component

4, Create pre-filler for **UserDetails**
    - based on the input fields, on screen load the prefilled values should be applied

5, Move out the cart into a MobX store (just like how it works with PaymentStore)

6, Create a simple UserStore with MobX which should have the following props
    - name (mock: like: 'Merida the Brave')
    - email (mock: like: who@there.com)
    - phone (mock, like: 12341234)
    - list of saved credit card names (like: ['amex', 'visa', 'paypal']), not real credit cards
    - user role (like: 'user' or 'admin')

7, Create a screen with protected route: **Statistics**
    - this screen should have a dump of the currently in memory stored informations (mobx stores)
        - payment
        - user (if you choose that)
        - cart (if you choose that task)

8, Create a screen and add a way for the user to navigate there. Where you make an API call to a free json REST API ( for instance: https://jsonplaceholder.typicode.com/guide/ ) and validate the schema via joi

9, Update Confirmation page to show the details of the bought products, add some style
