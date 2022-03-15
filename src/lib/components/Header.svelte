<script lang="ts">
</script>

<nav>
	<ul>
		<li>
			<a sveltekit:prefetch href="/">Home</a>
		</li>
		<li>
			<a sveltekit:prefetch href="/blog">Blog</a>
		</li>
		<li>
			<a sveltekit:prefetch href="/writing">Writing</a>
		</li>
		<li>
			<a sveltekit:prefetch href="/about">About</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr auto 0 1fr;

		font-size: 1.2rem;

		background: var(--app-color-shell);

		width: 61.8%;

		position: fixed;
		top: 0;
		z-index: 20;

		padding-right: 0.6rem;

		border-radius: 0 0 1rem 1rem;

		transition: box-shadow 150ms ease-out, background-color var(--transition-duration) ease-in;
	}

  ul {
    display: flex;
    align-items: center;
    // justify-content: center;

    list-style: none;

    padding: 0;
    margin: 0;
  }

  a {
    --color: var(--app-color-primary);
    --color-rgb: var(--app-color-primary-rgb);
    --marker-height: 6px;
    --marker-opacity: 0.4;
    --border-radius: 0;

    display: block;

    user-select: none;

    z-index: 22;

    padding: 0rem 0.3rem;
    margin: 0.5rem 0.5rem;

    font-weight: 500;
    color: var(--color) !important;

    position: relative;

    transition: all 170ms ease-in;

    &:focus-visible,
    &:hover {
      --border-radius: 4px;
      --marker-height: 100%;
      --marker-opacity: 1;
      --color: var(--app-color-primary-contrast) !important;

      &::after {
        transform: scaleX(1);
      }
    }
  }
</style>
