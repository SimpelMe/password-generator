<!DOCTYPE html>
<html lang="en">

<head>
  <?php include dirname($_SERVER['DOCUMENT_ROOT']) . "/simpel.cc/php/head.php"; ?>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    <?php include dirname($_SERVER['DOCUMENT_ROOT']) . "/simpel.cc/php/header.php"; ?>
  </header>
  <main>
    <noscript>
      <b>Warning: JavaScript had to be enabled.</b>
      <br><br>
    </noscript>
    <div class="container">
      <div class="buttons">
        <button id="generate" autofocus>Generate Password</button>
        <button id="copy-btn">Copy Password</i></button>
      </div>

      <div class="result">
        <label for="result">Password:</label>
        <textarea id="result" readonly tabindex="-1"></textarea>
      </div>

      <div class="options">
        <label for="slider">Length:</label>
        <input id="slider" type="number" min="4" max="99" value="23" />
        <details>
          <summary>More Options</summary>
          <div>
            <input type="checkbox" id="lowercase" checked />
            <label for="lowercase">Include Lowercase</label>
          </div>
          <div>
            <input type="checkbox" id="uppercase" checked />
            <label for="uppercase">Include Uppercase</label>
          </div>
          <div>
            <input type="checkbox" id="number" checked />
            <label for="number">Include Numbers</label>
          </div>
          <div>
            <input type="checkbox" id="symbol" checked />
            <label for="symbol">Include Symbols</label>
          </div>
        </details>
      </div>

    </div>

    <script src="script.js"></script>
  </main>
</body>

</html>
