<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppointmentRequest extends FormRequest
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
            'schedule' => 'required',
            'selected_services' => 'required',
            'subtotal' => 'required',
            'user_id' => 'sometimes|exists:users,id',
            'message' => 'required|max:255'
        ];
    }

    public function messages()
    {
        return [
            'selected_services.required' => 'Please select at least 1 service',
            'message.required' => 'Please describe your dental appointment',
        ];
    }
}
