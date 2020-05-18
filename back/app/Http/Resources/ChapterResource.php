<?php
/**
 * Created by PhpStorm.
 * User: eldarkhasen
 * Date: 3/28/20
 * Time: 23:01
 */

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class ChapterResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        $lessons = $this->relationLoaded('lessons') ? LessonResource::collection($this->lessons) : [];
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description'=>$this->description,
            'lessons'=>$lessons,
        ];
    }

}