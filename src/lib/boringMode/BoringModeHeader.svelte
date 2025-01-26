<script>
    let isOpen = false; // State to track if the menu is open

    function toggleMenu() {
        isOpen = !isOpen; // Toggle the menu state
    }
</script>

<header>
    <button on:click={toggleMenu} class="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <nav class={isOpen ? 'open' : ''}>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#discography">Discography</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#for-sale">For Sale</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<style>
    nav {
        background-color: #333; /* Background color for the header */
        padding: 1rem; /* Padding around the nav */
        position: relative; /* Positioning for desktop */
    }
    ul {
        list-style-type: none; /* Remove bullet points */
        display: flex; /* Flexbox for horizontal layout */
        justify-content: space-around; /* Space items evenly */
        margin: 0; /* Remove default margin */
        padding: 0; /* Remove default padding */
    }
    li {
        margin: 0; /* Remove margin from list items */
    }
    a {
        color: white; /* Text color */
        text-decoration: none; /* Remove underline */
        padding: 0.5rem 1rem; /* Padding for clickable area */
        transition: background-color 0.3s; /* Transition for hover effect */
    }
    a:hover {
        background-color: #555; /* Change background on hover */
    }
    .hamburger {
        display: none; /* Hide by default */
        flex-direction: column; /* Stack the lines */
        cursor: pointer; /* Pointer cursor on hover */
    }
    .hamburger span {
        height: 3px; /* Height of the lines */
        width: 25px; /* Width of the lines */
        background-color: white; /* Color of the lines */
        margin: 3px 0; /* Space between lines */
    }
    nav {
        display: block; /* Show nav by default on desktop */
    }
    nav.open {
        display: block; /* Show nav when open */
    }

    @media (max-width: 768px) {
        .hamburger {
            display: flex; /* Show hamburger on mobile */
        }
        nav {
            display: none; /* Hide nav by default on mobile */
        }
        nav.open {
            display: block; /* Show nav when open on mobile */
        }
    }
</style>
