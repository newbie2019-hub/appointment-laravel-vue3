<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'first_name' => 'required|max:100',
            'middle_name' => 'nullable|max:100',
            'last_name' => 'required|max:100',
            'email' => 'required|email|unique:services,service,'.$this->id.',id',
            'address' => 'required|max:255',
            'gender' => 'required|max:20',
            'contact_number' => 'required|min:12|max:25',
            'birthday' => 'required',
            'current_password' => 'sometimes|current_password'
        ];
    }
}
