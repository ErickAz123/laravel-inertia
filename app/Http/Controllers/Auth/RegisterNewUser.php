<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisterNewUser extends Controller
{
    public function create(): Response
    {
        return Inertia::render('auth/Register');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'password'=> ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name'=> $request->name,
            'username'=> $request->username,
            'email'=> $request->email,
            'role' => $request->role ?: 'user',
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        return redirect(route('Login'));
    }
}
