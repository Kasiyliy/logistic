<?php
/**
 * Created by PhpStorm.
 * User: eldarkhasen
 * Date: 3/28/20
 * Time: 22:58
 */

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $chapters = $this->relationLoaded('chapters') ? ChapterResource::collection($this->chapters) : [];


        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'visible' => $this->visible,
            'chapters' => $chapters,
        ];
    }

}