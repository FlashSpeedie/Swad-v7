import React from 'react';
import { Document, Page } from 'react-pdf';
import './Reference_Page.css';

const ReferencePage = () => {
    return (
        <div>
            <ul className="content">
                <h1>Reference Page</h1>
                <h2>User Session</h2>
                <p>
                    While the production version of the site will feature a login/signup popup for users, the competition version includes an auto-login functionality to streamline access and demonstrate core features without authentication barriers.
                    <br />
                    Additionally, on the My Orders page, there are items that have already been ordered for demonstration purposes; this will not be present in the production version.
                </p>
                <p>
                    <h2>Admin Link</h2>
                    On the production website, the admin link won't be visible to users, but for the competition, it is here:
                    <a href="https://swad-admin.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#2980b9' }}> Click Here To Go To The Admin Page</a>
                </p>


                <h2>Copyright & Plan of Work Checklist</h2>

                <ul className="source-list">
                    <li>
                        {/* Link to open PDF in a new tab */}
                        <a
                            href="/Copyright.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-link"
                        >
                            Click Here</a> to Open Copyright & Plan of Work Checklist PDF if the PDF below doesn't load properly.

                    </li>
                </ul>
                <div>
                    <iframe
                        src="/Copyright.pdf"
                        width="100%"
                        height="800px"
                        style={{ border: 'none' }}
                        title="Copyright Document"
                    />
                </div>

                <h2>Images and Information</h2>
                <ul className="source-list">
                    <p>We designed our own logo using Adobe Illustrator</p>
                    <p>For the fonts of our website we used Google Fonts </p>
                    <p>For the icons on our website we used Icon8 and Flaticons</p>
                    <p>We used Cloudinary to host our images, see image links below</p>

                    <li><b className="footer-links-title">Food Images Links:</b></li>


                    <li><b>Category: Salads</b></li>
                    <ul>
                        <li>Item: Mediterranean Quinoa Salad - <a href="https://pixabay.com/photos/quinoa-salad-healthy-quinoa-quinoa-2986706/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Avocado Chickpea Salad - <a href="https://pixabay.com/photos/avocado-salad-fresh-food-829092/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Grilled Veggie Caesar Salad - <a href="https://pixabay.com/photos/salad-asian-food-dish-meal-7249259/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Spinach and Apple Salad - <a href="https://pixabay.com/photos/food-meal-dish-apple-brunch-pasta-8244128/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Roasted Beet and Goat Cheese Salad - <a href="https://pixabay.com/photos/spinach-beet-beta-beetroot-salad-791639/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Category: Rolls</b></li>
                    <ul>
                        <li>Item: Vegan Sushi Rolls - <a href="https://pixabay.com/photos/food-sushi-seafood-japan-oriental-3581341/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Caprese Spring Rolls - <a href="https://pixabay.com/photos/egg-roll-spring-roll-avocado-roll-2680478/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Vegetarian Egg Rolls - <a href="https://pixabay.com/photos/food-refreshment-plate-meal-3228057/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Sweet Potato & Black Bean Tortilla Wraps - <a href="https://pixabay.com/photos/food-wrap-vegan-snack-a-drink-3048691/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Twin Tomato Tortilla Burritos - <a href="https://pixabay.com/photos/burrito-food-mexican-tortilla-4126108/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Category: Desserts</b></li>
                    <ul>
                        <li>Item: Vegan Chocolate Mousse - <a href="https://pixabay.com/photos/chocolate-mousse-au-chocolat-cream-3913334/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Apple Cinnamon Crumble - <a href="https://pixabay.com/photos/food-drinks-apple-bake-brulee-2940287/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Lemon Poppy Seed Slices - <a href="https://pixabay.com/photos/cake-dessert-food-lemon-3060458/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Coconut Chia Pudding - <a href="https://pixabay.com/photos/berries-chia-pudding-breakfast-6514670/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Raspberry Almond Tart - <a href="https://pixabay.com/photos/tart-raspberry-tart-dessert-cake-7322951/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Category: Sandwiches</b></li>
                    <ul>
                        <li>Item: Grilled Veggie and Hummus Sandwich - <a href="https://pixabay.com/photos/bread-sandwich-food-plate-toast-1867208/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Avocado Toast with Roasted Tomatoes - <a href="https://pixabay.com/photos/toast-food-flat-lay-breakfast-6011147/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Caprese Sandwich - <a href="https://pixabay.com/photos/sandwich-delicious-food-dining-cafe-986784/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Mushroom and Swiss Melt - <a href="https://pixabay.com/photos/toast-vegan-sandwich-vegan-breakfast-7009956/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Falafel Pita - <a href="https://pixabay.com/photos/falafel-food-pitta-bread-1781656/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Category: Cakes</b></li>
                    <ul>
                        <li>Item: Carrot Cake with Cream Cheese Frosting - <a href="https://pixabay.com/photos/carrot-carrot-cake-rawan-cake-cake-4343497/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Chocolate Raspberry Layer Cake - <a href="https://pixabay.com/photos/cake-berries-dessert-sweet-8233676/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Lemon Blueberry Pound Cake - <a href="https://pixabay.com/photos/lemon-cake-cake-dessert-lemon-8274419/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Velvet Cream Cake with Berry Frosting - <a href="https://pixabay.com/photos/cake-cakes-cream-cake-cream-yummy-1227842/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Almond Joy Cake - <a href="https://pixabay.com/photos/cake-piece-plate-dessert-pastry-1971552/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Category: Vegan</b></li>
                    <ul>
                        <li>Item: Lentil and Vegetable Broth Soup - <a href="https://pixabay.com/photos/soup-vegetable-soup-minestrone-8021565/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Asparagus Wild Salad - <a href="https://pixabay.com/photos/asparagus-asparagus-salad-g%C3%BCn-3304997/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Organic Vegan Burger - <a href="https://pixabay.com/photos/vegan-burger-food-hamburger-4660855/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Paprika Vegetable Skewer - <a href="https://pixabay.com/photos/vegetable-skewer-paprika-tomato-3317055/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Swad Loaf - <a href="https://pixabay.com/photos/loaf-sandwich-breakfast-fruit-3488727/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Category: Pasta</b></li>
                    <ul>
                        <li>Item: Penne Arrabbiata - <a href="https://pixabay.com/photos/pasta-penne-italian-food-7475756/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Pesto Primavera - <a href="https://pixabay.com/photos/pasta-pesto-farfalle-pesto-pasta-1854245/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Creamy Garlic Sauce Egg Noodles - <a href="https://pixabay.com/photos/food-dish-cheese-salad-garnish-8151625/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Swiss Mac & Cheese - <a href="https://pixabay.com/photos/macaroni-aelpler-swiss-switzerland-3479021/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Butternut Squash Ravioli - <a href="https://www.freepik.com/free-photo/closeup-tasty-italian-ravioli_7061190.htm#fromView=search&page=1&position=2&uuid=30d3629b-04fa-4b48-be38-5da87d1d1a95&query=Ravioli" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Category: Noodles</b></li>
                    <ul>
                        <li>Item: Stir Fry Pad Thai - <a href="https://pixabay.com/photos/noodles-stir-fired-pad-thai-seafood-545259/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Spicy Vietnamese Soup - <a href="https://pixabay.com/photos/vietnam-spicy-rice-noodles-4506690/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Miso Ramen - <a href="https://pixabay.com/photos/dish-ramen-japanese-cuisine-food-6799805/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Sesame Garlic Udon - <a href="https://pixabay.com/photos/udon-noodles-noodles-round-soup-4738229/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Spaghetti Aglio e Olio - <a href="https://www.pexels.com/photo/pasta-with-herbs-on-plate-14899491/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Category Images:</b></li>
                    <ul>
                        <li>Salads - <a href="https://pixabay.com/photos/meal-salad-cucumbers-food-leaves-2834549/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Rolls - <a href="https://pixabay.com/photos/burrito-tortilla-food-mexican-4126116/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Desserts - <a href="https://pixabay.com/photos/dessert-berries-calories-ice-cream-1786311/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Sandwiches - <a href="https://pixabay.com/photos/bread-sandwich-food-plate-toast-1867208/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Cakes - <a href="https://pixabay.com/photos/cake-torte-dessert-sweet-fruit-1284548/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Vegan - <a href="https://pixabay.com/photos/vegan-vegan-food-potatos-food-4833041/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Pasta - <a href="https://pixabay.com/photos/tortelloni-pasta-tortellini-food-646680/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Noodles - <a href="https://pixabay.com/photos/feast-noodles-noodles-noodle-image-1168322/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>
                    <hr />
                    <br />
                    <li><b>Home Page</b></li>
                    <ul>
                        <li>Hero Section - <a href="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDgyMTM5MXx8ZW58MHx8fHw%3D&dpr=2&auto=format&fit=crop&w=291.2&q=60" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>
                    <li><b>Book a Table Page</b></li>
                    <ul>
                        <li>Image 1 - <a href="https://unsplash.com/it/foto/un-tavolo-e-sedie-sotto-un-albero-in-un-campo-m1Jnyio2pUs" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>
                    <li><b>Locations Page</b></li>
                    <ul>
                        <li>Oklahoma City - <a href="https://pixabay.com/photos/chairs-restaurant-tables-1837293/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Edmond - <a href="https://pixabay.com/photos/kitchen-restaurant-food-breakfast-6878026/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Tulsa - <a href="https://pixabay.com/photos/restaurant-food-table-sea-plant-5521372/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>About Us Page</b></li>
                    <ul>
                        <li>Paragraph 1 - <a href="https://pixabay.com/photos/family-love-heart-reunion-winter-7727035/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Paragraph 2 - <a href="https://pixabay.com/illustrations/health-food-vegetable-person-9086445/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Paragraph 3 - <a href="https://www.pexels.com/photo/flat-lay-photography-of-vegetable-salad-on-plate-1640777/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Blog Page</b></li>
                    <ul>
                        <li>Why Farm-to-Table is Better for You - <a href="https://pixabay.com/photos/agriculture-vietnam-terraces-3732476/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>The Story Behind Swad: Our Farm-to-Table Mission -  <a href="https://pixabay.com/photos/time-reading-book-love-love-story-5342802/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>How Swad Supports Local Farmers and Communities - <a href="https://pixabay.com/photos/team-group-people-motivation-386673/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Seasonal Ingredients: What's Fresh This Spring? - <a href="https://pixabay.com/photos/tree-blossoms-blooms-spring-blossom-7022041/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Our Signature Dishes Made with Local Ingredients - <a href="https://pixabay.com/photos/loaf-sandwich-breakfast-fruit-3488727/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Healthy Eating: The Benefits of Eating Fresh, Local Foods - <a href="https://pixabay.com/photos/vegetables-water-droplets-fresh-1584999/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Initiatives Page</b></li>
                    <ul>
                        <li>Image 1 - <a href="https://pixabay.com/photos/plant-planting-life-nature-natural-7702558/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>
                </ul>

            </ul>
        </div>
    );
};

export default ReferencePage;
