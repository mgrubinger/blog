<script>
  import { onMount } from "svelte";

  let openheartEndpoint = "https://openheart.martin-grubinger.workers.dev";

  let url = $state("");
  onMount(() => {
    url = window.location.href;

    getIt(sanitizedUrl);
  });

  let sanitizedUrl = $derived.by(() => {
    let u = url;
    u = u.replace(/http(s)?\:\/\//, "");
    u = u.replace(/\/$/, ""); // replace trailing slash
    return u;
  });

  const possibleEmojis = ["👍", "👎", "💜", "👏", "🙄"];

  let state = $state("idle");
  let count = $state({});

  async function getIt(theUrl) {
    if (theUrl == "") return;
    if (theUrl.includes("localhost")) return;
    try {
      let res = await fetch(`${openheartEndpoint}/${theUrl}`, {
        method: "GET",
      });
      if (res.ok) {
        let response = await res.json();

        Object.entries(response).forEach(([emoji, prevCount]) => {
          if (!possibleEmojis.includes(emoji)) return;
          count[emoji] = prevCount;
        });
      }
    } catch (error) {}
  }

  async function postIt(emoji) {
    state = "busy";
    let res = await fetch(`${openheartEndpoint}/${sanitizedUrl}`, {
      method: "POST",
      body: emoji,
    });
    if (res.ok) {
      let response = await res.json();
      if (response.count) count[emoji] = response.count;
    }
    state = "idle";
  }
</script>

<div class="openheart">
  <div class="reactions">
    {#each possibleEmojis as emoji}
      <button
        class="button"
        type="button"
        onclick={() => postIt(emoji)}
        disabled={state === "busy"}
      >
        <span class="emoji">{emoji}</span>
        <span class="count"
          >{#if count[emoji]}{count[emoji]}{/if}</span
        >
      </button>
    {/each}
  </div>
  <div>
    <button type="button" class="whats-this-button" popovertarget="whats-this-popover">what's this?</button>
    <div id="whats-this-popover" popover="hint">
      <p>
        This is an implementation of the <a href="https://openheart.fyi/">
          Open Heart Protocol
        </a>.<br />
        Feel free to send a reaction for this page. ☺️
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .openheart {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 1rem;
  }
  .reactions {
    display: flex;
    gap: 1rem;
    border: 2px dotted rgb(var(--gray-light));
    padding: 10px;
    width: min-content;
    border-radius: 20px;
  }
  .button {
    border: 1px solid transparent;
    border-radius: 30px;
    display: flex;
    padding: 1.25rem;
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;

    align-items: center;
    justify-content: center;
    background-color: rgb(228 228 228 / 44%);
    cursor: pointer;
    position: relative;

    .emoji {
      transition: all 120ms ease-in-out;
      will-change: transform;
      font-size: 1rem;
    }

    &:hover,
    &:focus {
      background-color: #fff;
      border-color: var(--accent);

      .emoji {
        transform: scale(1.2) translateY(-5px) rotate(-5deg);
      }
    }
  }
  .count {
    font-size: 60%;
    position: absolute;
    bottom: -2px;
    color: #666;
    font-weight: bold;
  }

  .whats-this-button {
    appearance: none;
    border: none;
    background: transparent;
    font-size: var(--font-size-07);
    margin-top: var(--size-1);
    text-align: right;
    font-size: 1rem;
    color: var(--color-font-muted);
    cursor: pointer;
    anchor-name: --my-anchor;

    &:hover {
      text-decoration: underline;
    }

    summary {
      list-style-type: "";

      &:hover {
        color: var(--accent-dark);
      }
    }
    p {
      margin: 0;
    }
  }

  #whats-this-popover {
    anchor-name: --my-anchor;
    position: absolute;
    position-area: bottom left;
    margin: 0;
  }
</style>
