<!DOCTYPE html>
<html lang="en">

<head>
  <?php include dirname($_SERVER['DOCUMENT_ROOT']) . "/simpel.cc/php/head.php"; ?>
  <link rel="stylesheet" href="style.min.css">
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
        <button id="copy-btn" autofocus>Copy Password</i></button>
      </div>

      <div class="result">
        <label for="result">Password:</label>
        <textarea id="result" readonly tabindex="-1"></textarea>
      </div>

      <div class="options">
        <div>
          <label for="slider">Length:</label>
          <input id="slider" type="number" min="1" max="1048" value="42" oninput="triggerGenerator()"/>
        </div>
        <details>
          <summary>More Options</summary>
          <div class="more-options" onchange="triggerGenerator()">
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
          </div>
        </details>
      </div>
    </div>

  </main>
  <script src="script.min.js"></script>
  <script>
    triggerGenerator();
  </script>
</body>

</html>
