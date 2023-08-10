<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numeros del Negro Cardoso</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body class="bg-dark numberSelected">
    <div class="container mt-5 bg-light bg-gradient">
        <div class="row bg-info text-white">
            <div id="headerLevel" class="p-2 col d-flex justify-content-start"></div>
            <div id="headerScore" class="p-2 col d-flex justify-content-center"></div>
            <div id="headerTimer" class="p-2 col d-flex justify-content-end">
                <p id="countdown"></p>
            </div>
        </div>
        <div class="row" style="height: 500px;">
            <div class="col-8">
                <?php include('content.php') ?>
            </div>
            <div class="col-4 bg-success">
                <div class="row text-white text-center fw-bolder">
                    <div class="col">#Intento</div>
                    <div class="col">Numero</div>
                    <div class="col">Respuesta</div>
                </div>
                <div class="row" id="attemptsMade"></div>
            </div>
        </div>
        <div class="row bg-warning" style="height: 100px;">
            <div class="col-8">
                <div id="numberSelecteables" class="row mt-4"></div>
            </div>
            <div class="col-4">
                <?php include('footerActionsButtons.php') ?>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalResultDiv" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0"></div>
                <div id="modalBodyDiv" class="modal-body text-center">
                    <div id="titleResult"></div>
                </div>
                <div class="modal-footer justify-content-center border-0">
                    <button type="button" class="btn btn-primary">Aceptar</button>
                </div>
            </div>
        </div>
    </div>

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="js/script.js"></script>

</html>