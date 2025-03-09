import React from 'react';
import { Document, Page } from 'react-pdf';
import './Reference_Page.css';

const ReferencePage = () => {
    return (
        <div>
            <ul className="content">
                <h1>Reference Page</h1>

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
                            Open Copyright & Plan of Work Checklist Checklist PDF
                        </a>
                    </li>
                </ul>

                <h2>Images and Information</h2>
                <ul className="source-list">
                    <li><b>Food Images Links:</b></li>

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
                        <li>Item: Sweet Potato & Black Bean Tortilla Wraps - <a href="https://pixabay.com/photos/wraps-food-tortilla-healthy-1170195/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Twin Tomato Tortilla Burritos - <a href="https://pixabay.com/photos/burrito-food-mexican-tortilla-4126108/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Category: Dessert</b></li>
                    <ul>
                        <li>Item: Vegan Chocolate Mousse - <a href="https://pixabay.com/photos/chocolate-mousse-au-chocolat-cream-3913334/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Apple Cinnamon Crumble - <a href="https://pixabay.com/photos/food-drinks-apple-bake-brulee-2940287/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Lemon Poppy Seed Slices - <a href="https://pixabay.com/photos/cake-dessert-food-lemon-3060458/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Coconut Chia Pudding - <a href="https://pixabay.com/photos/berries-chia-pudding-breakfast-6514670/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Raspberry Almond Tart - <a href="https://pixabay.com/photos/tart-raspberry-tart-dessert-cake-7322951/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Category: Sandwich</b></li>
                    <ul>
                        <li>Item: Grilled Veggie and Hummus Sandwich - <a href="https://pixabay.com/photos/bread-sandwich-food-plate-toast-1867208/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Avocado Toast with Roasted Tomatoes - <a href="https://pixabay.com/photos/toast-food-flat-lay-breakfast-6011147/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Caprese Sandwich - <a href="https://pixabay.com/photos/sandwich-delicious-food-dining-cafe-986784/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Mushroom and Swiss Melt - <a href="https://pixabay.com/photos/toast-vegan-sandwich-vegan-breakfast-7009956/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Item: Falafel Pita - <a href="https://pixabay.com/photos/falafel-food-pitta-bread-1781656/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>

                    <li><b>Category: Cake</b></li>
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
                        <li>Item: Butternut Squash Ravioli - <a href="https://pixabay.com/photos/ravioli-lemon-butter-pasta-noodles-1949698/" target="_blank" rel="noopener noreferrer">Link</a></li>
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
                        <li>Salad - <a href="https://pixabay.com/photos/meal-salad-cucumbers-food-leaves-2834549/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Rolls - <a href="https://pixabay.com/photos/burrito-tortilla-food-mexican-4126116/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Dessert - <a href="https://pixabay.com/photos/dessert-berries-calories-ice-cream-1786311/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Sandwich - <a href="https://pixabay.com/photos/bread-sandwich-food-plate-toast-1867208/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Cake - <a href="https://pixabay.com/photos/cake-torte-dessert-sweet-fruit-1284548/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Vegan - <a href="https://pixabay.com/photos/vegan-vegan-food-potatos-food-4833041/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Pasta - <a href="https://pixabay.com/photos/tortelloni-pasta-tortellini-food-646680/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Noodles - <a href="https://pixabay.com/photos/feast-noodles-noodles-noodle-image-1168322/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>
                </ul>
            </ul>
        </div>
    );
};

export default ReferencePage;
