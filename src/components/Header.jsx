import { useState } from 'react'

export const Header = ({ product, cart, isEmpty, handleRemove }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    const handleCartClick = () => {
        setCartOpen(prev => !prev);
    }

  return (
    <header>
        <div className="navigation-container">
            <a className="logo" href="#">
                <img src="./logo.svg" alt="Sneakers Logo" />
            </a>

            <nav>
                <button
                    className="hamburger-btn"
                    aria-controls="primary-navigation"
                    data-visible={ isOpen }
                    onClick={ handleClick }
                >
                </button>

                <ul
                    id="primary-navigation"
                    className="hamburger-menu"
                    data-visible={ isOpen }
                >
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Woman</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>

        <div className="cart-profile-container">
            <button className="cart-btn" onClick={ handleCartClick }>
                <img src="./icon-cart.svg" alt="Cart" />
                <div>{ ( Object.keys(cart).length === 0 ) ? '' : cart.amount }</div>
            </button>

            <div className="cart-menu" data-cart-visible={ cartOpen }>
                <h2>Cart</h2>

                <div className="cart-items-container">

                    { ( isEmpty )
                        ? (
                            <p className="cart-empty" data-cart-items={ isEmpty }>Your cart is empty.</p>
                        )
                        : (
                            <div className="cart-items" data-cart-items={ isEmpty }>
                                <div className="item">
                                    <img className="item-img" src={`./${ cart.images }`} alt="Product image" />
                                    <p className="item-name">{ cart.name }</p>
                                    <p className="item-price">${ cart.price.toFixed(2) } <span className="item-amount">x { cart.amount }</span> <span className="item-f-price">${ cart.price * cart.amount }</span></p>
                                    <button>
                                        <img onClick={ handleRemove } src="./icon-delete.svg" alt="delete item" />
                                    </button>
                                </div>
    
                                <button className="checkout-btn">Checkout</button>
                            </div>
                        )
                    }
                </div>
            </div>

            <a className="profile" href="#">
                <img src="./image-avatar.png" alt="Profile" />
            </a>
        </div>
    </header>
  )
}
