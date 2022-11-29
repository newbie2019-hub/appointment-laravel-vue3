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
        if(request()->routeIs('appointments.store')){
           return $this->storeRules();
        }

        if(request()->routeIs('appointments.update')){
           return $this->updateRules();
        }
    }

    public function storeRules()
    {
        return [
            'schedule' => 'required',
            'selected_services' => 'required',
            'subtotal' => 'required',
            'user_id' => 'sometimes|exists:users,id',
            'message' => 'required|max:255',
            'healthFormData.q1' => 'required',
            'healthFormData.q2' => 'required',
            'healthFormData.q3' => 'required',
            'healthFormData.q4' => 'required',
            'healthFormData.q5' => 'required',
        ];
    }

    public function updateRules()
    {
        return [
            'schedule' => 'required',
            'selected_services' => 'required',
            'subtotal' => 'required',
            'user_id' => 'sometimes|exists:users,id',
            'message' => 'required|max:255',
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
