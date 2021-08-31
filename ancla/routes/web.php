<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

/* Route::get('storage/{filename}', function ($filename)
{
    $path = storage_path($filename);

    if (!File::exists($path)) {
        abort(404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
}); */

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => ['web']], function () {

    // Put your routes inside here
    Route::get('/', function () {
        return view('welcome');
    });

    //Clear config cache configurations:
    Route::get('/clear-cache', function () {
        Artisan::call('config:clear');
        Artisan::call('cache:clear');
        Artisan::call('config:cache');
        return '<h1>Cache Cleared!</h1>'; //Return anything
    });

    //Storage link
    Route::get('/linkstorage', function () {
        Artisan::call('storage:link'); // this will do the command line job
        return '<h1>Storage linked</h1>';
    });

    Route::post('/send', function (Request $request) {
        //header('Access-Control-Allow-Origin:  *');
        header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');
        header('Access-Control-Allow-Methods:  *');
        header("Content-Type", "application/json");
        $nome = $request->get('nome');
        $email = $request->get('email');
        $oggetto = $request->get('oggetto') ?: "non specificato";
        $messaggio = $request->get('messaggio');

        $errors = array();

        // Check email
        if (empty($email)) {
            $errors[] = 'Email non inserita, riprova';
        } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Email non valida, riprova';
        }

        // Check messaggio
        if (empty($messaggio)) {
            $errors[] = 'Messaggio vuoto, riprova';
        }

        // Check nome
        if (empty($nome)) {
            $errors[] = 'Nome non inserito, riprova';
        }

        // Se l'array errors è vuota, invia la mail
        if (!count($errors)) {
            $to = 'selter85@hotmail.com';

            $data = array('name' => $nome, 'address' => $email, 'subject' => $oggetto, 'body' => $messaggio);

            Mail::send('mail', $data, function ($msg) use ($data, $to) {
                $msg->to($to)->subject('Richiesta contatto per: ' . $data['subject']);
                $msg->from($data['address'], $data['name']);
            });

            echo "Messaggio inviato.";

            /* if (mail($to_email, $oggetto, $messaggio, $headers)) {
                $sent = 'Operazione completata con successo!';
            } else $sent = 'Si sono verificati errori. Riprova!';
            echo json_encode($sent); */
        } else {
            // Ci sono degli errori
            echo json_encode($errors);
        }
    });

    Route::get('/mail', function () {
        return view('mail');
    });
});