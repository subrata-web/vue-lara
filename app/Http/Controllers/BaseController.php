<?php 

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class BaseController extends Controller {

    protected function setPageTitle($pageTitle = '', $subTitle = '', $metaDescription = '')
    {
        view()->share([
            'pageTitle' => $pageTitle,
            'subTitle' => $subTitle,
            'description' => $metaDescription
        ]);
    }

    protected function responseJson($error = false, $message = 'Success', $payload = null,$errors = null, $statusCode = 200)
    {
        return response()->json([
            'error' => $error,
            'message' => $message,
            'payload' => $payload,
            'errors' => $errors
        ], $statusCode);
    }
}