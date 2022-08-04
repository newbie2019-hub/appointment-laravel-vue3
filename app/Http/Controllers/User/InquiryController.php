<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $inquiries = Inquiry::when($request->search, fn($query) 
                => $query->whereLike('full_name', $request->search)
                ->orWhereLike('subject', $request->search)
                ->orWhereLike('email', $request->search)
            )->latest()->paginate(10);

        $todaysInquiry = Inquiry::whereDate('created_at', now())->count();
        $totalInquiries = Inquiry::whereDate('created_at', now())->count();

        return Inertia::render('Inquiries', compact('inquiries', 'todaysInquiry', 'totalInquiries'));
    }

    public function store(Request $request)
    {
        //
    }

    public function destroy(Inquiry $inquiry)
    {
        $inquiry->delete();
        return back()->with('success', 'Inquiry has been deleted successfully!');
    }
}
