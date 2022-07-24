<?php

namespace App\Http\Controllers\web;

use App\Contracts\UserContract;
use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;

class UserManagementController extends BaseController {

    protected $userRepository;
    protected $payload = null;

    public function __construct(UserContract $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function index(Request $request)
    {
        try {
            $this->payload = $this->userRepository->listUsers();
            return $this->responseJson(false, 'Success.', $this->payload);
        } catch (\Exception $ex) {

        }
    }
}