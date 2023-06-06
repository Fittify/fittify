<script lang="ts">
    import '../app.css';
</script>

<div class="header">

        <div class="navLogo" id="navLogo">
            <a href="page.svelte"><img src="/logo.png"></a>
        </div>

        <nav>
            <div class="nav-links" id="navLinks">
                <ul>
                    <li><a href="#Lobby">Lobby</a></li>
                    <li><a href="#How">How it works!</a></li>
                    <li><a href="#About">About us</a></li>
                </ul>
            </div>
        </nav>
        
        <div class="headerButtons" id="headerButtons">
            <button class="button is-link is-inverted is-rounded">
                <a href="/login" class="columns is-variable is-1">
                    <span class="icon column">
                        <i class="fas fa-light fa-lock" style="color: #1e3357;"></i>
                    </span>
                    <p class="column">Login</p>
                </a>
            </button>
            <button class="button is-info is-rounded">
                <a href="/signup" class="columns is-variable is-1">
                    <p class="column">Get Started</p>
                </a>
            </button>
        </div>
    
    
</div>