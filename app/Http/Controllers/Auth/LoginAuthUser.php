<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LoginAuthUser extends Controller
{
    public function create(): Response
    {
        return Inertia::render('auth/Login');
    }

    public function store(LoginRe $request): RedirectResponse
    {
        $request->authecticate();

        $request->sessions()->regenerate();


    }
}
